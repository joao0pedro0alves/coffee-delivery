import { createContext, ReactNode, useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import { CartItem, CheckoutData, cartReducer } from '../reducers/cart/reducer'
import {
  addCartItemAction,
  updateCartItemAmontAction,
  removeCartItemAction,
  checkoutAction,
} from '../reducers/cart/actions'

interface CartContextProps {
  items: CartItem[]
  checkoutData: null | CheckoutData

  addItem: (item: CartItem) => void
  updateItemAmount: (itemId: string, newAmount: number) => void
  removeItem: (itemId: string) => void

  checkout: (checkoutData: CheckoutData) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

const CART_STATE_KEY = '@coffee-delivery:cart-state-1.0.0'

export function CartContextProvider({ children }: CartContextProviderProps) {
  const navigate = useNavigate()

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

  // Cart items

  function addItem(item: CartItem) {
    dispatch(addCartItemAction(item))

    toast(`${item.name} adicionado ao carrinho`, {
      icon: '☕',
    })
  }

  function updateItemAmount(itemId: string, newAmount: number) {
    dispatch(updateCartItemAmontAction(itemId, newAmount))
  }

  function removeItem(itemId: string) {
    dispatch(removeCartItemAction(itemId))
  }

  // Checkout

  function checkout(checkoutData: CheckoutData) {
    dispatch(checkoutAction(checkoutData))

    navigate('/delivery')
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cartState)
    localStorage.setItem(CART_STATE_KEY, stateJSON)
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        checkoutData: cartState.checkoutData,

        addItem,
        updateItemAmount,
        removeItem,

        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
