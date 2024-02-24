import { atomWithStorage } from 'jotai/utils'
import { atom } from 'jotai/vanilla'

export interface AuthSate {
  isLoggedIn: boolean
  userName: string
  accessToken: string
  refreshToken: string
  expiresAt: Date
}
export const authAtom: AuthSate = {
  isLoggedIn: false,
  userName: '',
  accessToken: '',
  refreshToken: '',
  expiresAt: new Date()
}

export const loginStoraged = atomWithStorage('loginState', false)
export const authState = atomWithStorage<AuthSate>('authState', authAtom)

export const handleLoginStore = atom(
  async get => get(loginStoraged),
  async (_get, set, update: boolean) => set(loginStoraged, update)
)
