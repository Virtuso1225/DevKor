type Code = 'SUCCESS' | 'FAILED' | 'ERROR'

export interface CommonResponse<T> {
  code: Code
  data: T
  message: string
  statusCode: number
}
