import {
  type UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
  type UseQueryResult
} from '@tanstack/react-query'
import axios, { AxiosError, type AxiosResponse } from 'axios'
import { toast } from '@/components/ui/use-toast'
import { COMMON_MESSAGES, TODO_MESSAGES } from '@/data/messages'
import type { ToDo } from '@/models/todo'
export const getToDoList = async () => {
  const response = await axios.get<ToDo[]>('http://localhost:8080/todo/lists')
  return response.data
}

export const useGetToDoList = (): UseQueryResult<ToDo[], Error> => {
  return useQuery<ToDo[]>({ queryKey: ['todoList'], queryFn: getToDoList, throwOnError: true })
}

export const postTodo = async (content: string) => {
  await sleep(2000)
  const response = await axios.post<null, AxiosResponse<null>, { content: string }>(
    'http://localhost:8080/todo/create',
    {
      content
    }
  )
  return response.data
}

export const usePostTodo = (): UseMutationResult<null, AxiosError, string> => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todoList']
      })
      toast({ title: TODO_MESSAGES.CREATE_SUCCESS })
    },
    onError: error => {
      if (error instanceof AxiosError) {
        const errorMessage = TODO_MESSAGES.CREATE_FAILED
        toast({ variant: 'destructive', title: errorMessage })
      } else {
        toast({ variant: 'destructive', title: COMMON_MESSAGES.UNKOWN_ERROR })
      }
    }
  })
}

interface PatchTodoRequest {
  id: number
  isChecked: true | false
}

const sleep = async (offset: number) => {
  return await new Promise(r => setTimeout(r, offset))
}

export const patchTodoCheck = async ({ id, isChecked }: PatchTodoRequest) => {
  const response = await axios.patch<null, AxiosResponse<number>, Pick<PatchTodoRequest, 'isChecked'>>(
    `http://localhost:8080/todo/update/${id}`,
    { isChecked }
  )
  return response.data
}

export const usePatchTodoCheck = (): UseMutationResult<number, AxiosError, PatchTodoRequest> => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchTodoCheck,
    onSuccess: data => {
      queryClient.invalidateQueries({
        queryKey: ['todoList']
      })
      toast({ title: data === 1 ? TODO_MESSAGES.CHECK_SUCCESS : TODO_MESSAGES.UNCHECK_SUCCESS })
    },
    onError: error => {
      if (error instanceof AxiosError) {
        const errorMessage = TODO_MESSAGES.UPDATE_FAILED
        toast({ variant: 'destructive', title: errorMessage })
      } else {
        toast({ variant: 'destructive', title: COMMON_MESSAGES.UNKOWN_ERROR })
      }
    }
  })
}

export const deleteTodo = async (id: number) => {
  await sleep(2000)
  const response = await axios.delete<null, AxiosResponse<null>, null>(`http://localhost:8080/todo/delete/${id}`)
  return response.data
}

export const useDeleteTodo = (): UseMutationResult<null, AxiosError, number> => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todoList']
      })
      toast({ title: TODO_MESSAGES.DELETE_SUCCESS })
    },
    onError: error => {
      if (error instanceof AxiosError) {
        const errorMessage = TODO_MESSAGES.DELETE_FAILED
        toast({ variant: 'destructive', title: errorMessage })
      } else {
        toast({ variant: 'destructive', title: COMMON_MESSAGES.UNKOWN_ERROR })
      }
    }
  })
}
