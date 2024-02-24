type codes = 'SUCCESS' | 'FAILED' | 'ERROR'

export interface CommonnResponse<T> {
  code: codes
  data: T
  message: string
  statusCode: number
}
