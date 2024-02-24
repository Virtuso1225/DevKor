import { type CommonnResponse } from '@/api/types/genericResponse'
import API from '@/lib/auth/customApi'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export const axiosGet = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonnResponse<T>>> => {
  const response = await API.get(url, config)
  return response
}

export const axiosPost = async <T, D>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonnResponse<D>>> => {
  const response = await API.post(url, data, config)
  return response
}

export const axiosPatch = async <T, D>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonnResponse<D>>> => {
  const response = await API.patch(url, data, config)
  return response
}

export const axiosDelete = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonnResponse<T>>> => {
  const response = await API.delete(url, config)
  return response
}
