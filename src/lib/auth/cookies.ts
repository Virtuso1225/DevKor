import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setRefreshToken = (refreshToken: string) => {
  const today = new Date()
  const expireDate = today.setDate(today.getDate() + 7)

  return cookies.set('refreshToken', refreshToken, {
    path: '/',
    expires: new Date(expireDate)
  })
}

export const getRefreshToken = (): string => {
  return cookies.get('refreshToken')
}

export const removeRefreshToken = () => {
  return cookies.remove('refreshToken')
}
