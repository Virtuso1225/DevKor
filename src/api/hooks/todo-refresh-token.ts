import { AxiosError } from 'axios'
import { useMutation, useQuery, useQueryClient, type UseQueryResult } from '@tanstack/react-query'
import type { ToDo } from '@/models/todo'
import { toast } from '@/components/ui/use-toast'
import { COMMON_MESSAGES, TODO_MESSAGES } from '@/data/messages'
import { axiosDelete, axiosGet, axiosPatch, axiosPost } from '@/api/hooks/https'

export const getToDoList = async () => {
  const response = await axiosGet<ToDo[]>('/todo/secure/lists')
  return response.data.data
}

export const useGetToDoList = (): UseQueryResult<ToDo[], Error> => {
  return useQuery<ToDo[]>({
    queryKey: ['todoList'],
    queryFn: getToDoList,
    throwOnError: true
  })
}

export const postTodo = async (content: string) => {
  const response = await axiosPost<{ content: string }, null>('/todo/secure/create', {
    content
  })
  return response.data
}

export const usePostTodo = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: postTodo,
    onSuccess: response => {
      queryClient.invalidateQueries({
        queryKey: ['todoList']
      })
      toast({ title: response.message })
    },
    onError: error => {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message ?? TODO_MESSAGES.CREATE_FAILED
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

export const patchTodoCheck = async ({ id, isChecked }: PatchTodoRequest) => {
  const response = await axiosPatch<Pick<PatchTodoRequest, 'isChecked'>, null>(`/todo/secure/update/${id}`, {
    isChecked
  })
  return response.data
}

export const usePatchTodoCheck = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchTodoCheck,
    onSuccess: response => {
      queryClient.invalidateQueries({
        queryKey: ['todoList']
      })
      toast({ title: response.message })
    },
    onError: error => {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message ?? TODO_MESSAGES.UPDATE_FAILED
        toast({ variant: 'destructive', title: errorMessage })
      } else {
        toast({ variant: 'destructive', title: COMMON_MESSAGES.UNKOWN_ERROR })
      }
    }
  })
}

export const deleteTodo = async (id: number) => {
  const response = await axiosDelete<null>(`/todo/secure/delete/${id}`)
  return response.data
}

export const useDeleteTodo = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: response => {
      queryClient.invalidateQueries({
        queryKey: ['todoList']
      })
      toast({ title: response.message })
    },
    onError: error => {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.message ?? TODO_MESSAGES.DELETE_FAILED
        toast({ variant: 'destructive', title: errorMessage })
      } else {
        toast({ variant: 'destructive', title: COMMON_MESSAGES.UNKOWN_ERROR })
      }
    }
  })
}
