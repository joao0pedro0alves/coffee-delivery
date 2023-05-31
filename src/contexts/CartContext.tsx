import { useState, createContext, ReactNode } from 'react'

interface CartItem {
  id: string
  name: string
  amount: number
  priceInCents: number
  imageUrl: string
}

interface CartContextProps {
  items: CartItem[]
  addItem: (item: CartItem) => void
  updateItemAmount: (itemId: string, newAmount: number) => void
  removeItem: (itemId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

// Context

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<CartItem[]>([])

  function addItem(item: CartItem) {
    setItems((state) => {
      const alreadyIncluded = state.some((cartItem) => cartItem.id === item.id)

      if (alreadyIncluded) return state
      return [...state, item]
    })
  }

  function updateItemAmount(itemId: string, newAmount: number) {
    setItems((state) => {
      return state.map((cartItem) =>
        cartItem.id === itemId ? { ...cartItem, amount: newAmount } : cartItem,
      )
    })
  }

  function removeItem(itemId: string) {
    setItems((state) => {
      return state.filter((cartItem) => cartItem.id !== itemId)
    })
  }

  return (
    <CartContext.Provider
      value={{ items, addItem, updateItemAmount, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
