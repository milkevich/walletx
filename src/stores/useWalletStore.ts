import { create } from 'zustand'

type Transaction = {
  id: string
  name: string
  amount: number
  date: string
  category: string
}

type WalletState = {
  balance: number
  transactions: Transaction[]
  setBalance: (b: number) => void
  setTransactions: (t: Transaction[]) => void
}

export const useWalletStore = create<WalletState>((set) => ({
  balance: 0,
  transactions: [],
  setBalance: (b) => set({ balance: b }),
  setTransactions: (t) => set({ transactions: t }),
}))
