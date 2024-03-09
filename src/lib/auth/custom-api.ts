import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

// API.interceptors.request.use(onRequest, handleRequestError)

export default API
