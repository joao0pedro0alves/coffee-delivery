import { createContext, ReactNode, useReducer, useEffect } from 'react'
import { CartItem, cartReducer } from '../reducers/cart/reducer'
import {
  addCartItemAction,
  updateCartItemAmontAction,
  removeCartItemAction,
} from '../reducers/cart/actions'

interface CartContextProps {
  items: CartItem[]
  // checkout: null | CheckoutData

  addItem: (item: CartItem) => void
  updateItemAmount: (itemId: string, newAmount: number) => void
  removeItem: (itemId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

const CART_STATE_KEY = '@coffee-delivery:cart-state-1.0.0'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      items: [],
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(CART_STATE_KEY)

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  function addItem(item: CartItem) {
    dispatch(addCartItemAction(item))
  }

  function updateItemAmount(itemId: string, newAmount: number) {
    dispatch(updateCartItemAmontAction(itemId, newAmount))
  }

  function removeItem(itemId: string) {
    dispatch(removeCartItemAction(itemId))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(CART_STATE_KEY, stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{ items: cartState.items, addItem, updateItemAmount, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
