import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { type CommonResponse } from '@/api/types/generic-response'
import API from '@/lib/auth/custom-api'

export const axiosGet = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await API.get(url, config)
  return response
}

export const axiosPost = async <T, D>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<D>>> => {
  const response = await API.post(url, data, config)
  return response
}

export const axiosPatch = async <T, D>(
  url: string,
  data?: T,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<D>>> => {
  const response = await API.patch(url, data, config)
  return response
}

export const axiosDelete = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<CommonResponse<T>>> => {
  const response = await API.delete(url, config)
  return response
}
