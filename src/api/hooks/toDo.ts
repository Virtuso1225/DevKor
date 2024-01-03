import type { ToDo } from '@/models/todo'
import { type UseMutationResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios, { Axios, type AxiosError, type AxiosResponse } from 'axios'
export const getToDoList = async () => {
  const response = await axios.get<ToDo[]>('http://localhost:8080/todo/lists')
  return response.data
}

export const useGetToDoList = () => {
  return useQuery<ToDo[]>({ queryKey: ['todoList'], queryFn: getToDoList })
}

export const postTodo = async (content: string) => {
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
    },
    onError: error => {
      console.log(error)
    }
  })
}

interface PatchTodoRequest {
  id: number
  isChecked: 0 | 1
}

export const patchTodoCheck = async ({ id, isChecked }: PatchTodoRequest) => {
  const response = await axios.patch<null, AxiosResponse<null>, { isChecked: 0 | 1 }>(
    `http://localhost:8080/todo/update/${id}`,
    { isChecked }
  )
  return response.data
}

export const usePatchTodoCheck = (): UseMutationResult<null, AxiosError, PatchTodoRequest> => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: patchTodoCheck,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todoList']
      })
    },
    onError: error => {
      console.log(error)
    }
  })
}

export const deleteTodo = async (id: number) => {
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
    },
    onError: error => {
      console.log(error)
    }
  })
}
