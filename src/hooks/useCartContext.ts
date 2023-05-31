import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export function useCartContext() {
  return useContext(CartContext)
}
