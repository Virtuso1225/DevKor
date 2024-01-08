import { handleRefreshError, useRefresh } from '@/lib/auth/refresh'
import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

API.interceptors.request.use(useRefresh, handleRefreshError)

export default API
