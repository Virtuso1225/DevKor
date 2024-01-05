import { atom, selector } from 'recoil'

export const authToken = atom({
  key: 'AuthState',
  default: ''
})

export const expiresAt = atom({
  key: 'ExpiresAt',
  default: new Date()
})

export const isAuthenticated = selector({
  key: 'isAuthenticated',
  get: ({ get }) => {
    return !!get(authToken)
  }
})
