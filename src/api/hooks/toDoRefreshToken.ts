import { toast } from '@/components/ui/use-toast'
import { COMMON_MESSAGES, TODO_MESSAGES } from '@/data/messages'
import API from '@/lib/auth/customApi'
import type { ToDo } from '@/models/todo'
import { authToken } from '@/recoil/atom'
import {
  type UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
  type UseQueryResult
} from '@tanstack/react-query'
import { AxiosError, type AxiosResponse } from 'axios'
import { useRecoilValue } from 'recoil'
export const getToDoList = async () => {
  const response = await API.get<ToDo[]>('/todo/secure/lists')
  return response.data
}

export const useGetToDoList = (): UseQueryResult<ToDo[], Error> => {
  const accessToken = useRecoilValue(authToken)
  return useQuery<ToDo[]>({
    queryKey: ['todoList', accessToken],
    queryFn: getToDoList,
    throwOnError: true
  })
}

export const postTodo = async (content: string) => {
  const response = await API.post<null, AxiosResponse<null>, { content: string }>('/todo/secure/create', {
    content
  })
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
  isChecked: 0 | 1
}

export const patchTodoCheck = async ({ id, isChecked }: PatchTodoRequest) => {
  const response = await API.patch<null, AxiosResponse<number>, Pick<PatchTodoRequest, 'isChecked'>>(
    `/todo/secure/update/${id}`,
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
  const response = await API.delete<null, AxiosResponse<null>, null>(`/todo/secure/delete/${id}`)
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
