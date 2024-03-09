import { atomWithStorage, createJSONStorage } from 'jotai/utils'

export interface AuthState {
  isLoggedIn: boolean
  userName: string
  accessToken: string
  refreshToken: string
  expiresAt: Date
}
export const authState: AuthState = {
  isLoggedIn: false,
  userName: '',
  accessToken: '',
  refreshToken: '',
  expiresAt: new Date()
}

export const loginAtom = atomWithStorage<boolean>(
  'loginState', false, createJSONStorage(() => localStorage), { getOnInit: true }
)
export const authAtom = atomWithStorage<AuthState>('authState', authState)

