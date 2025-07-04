import { create } from 'zustand'
import { User } from 'firebase/auth'

type AuthState = {
  user: User | null
  setUser: (u: User | null) => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
}))
