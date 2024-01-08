import { atom, selector } from 'recoil'

export const authToken = atom({
  key: 'AuthState',
  default: ''
})

export const isAuthenticated = selector({
  key: 'isAuthenticated',
  get: ({ get }) => {
    return !!get(authToken)
  }
})
