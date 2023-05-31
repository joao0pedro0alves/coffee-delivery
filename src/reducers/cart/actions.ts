/* eslint-disable no-unused-vars */
import { CartItem, CheckoutData } from './reducer'

export enum CartActions {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  UPDATE_CART_ITEM_AMOUNT = 'UPDATE_CART_ITEM_AMOUNT',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',

  CHECKOUT = 'CHECKOUT',
}

export function addCartItemAction(newItem: CartItem) {
  return { type: CartActions.ADD_CART_ITEM, payload: { newItem } }
}

export function updateCartItemAmontAction(itemId: string, newAmount: number) {
  return {
    type: CartActions.UPDATE_CART_ITEM_AMOUNT,
    payload: { itemId, newAmount },
  }
}

export function removeCartItemAction(itemId: string) {
  return {
    type: CartActions.REMOVE_CART_ITEM,
    payload: { itemId },
  }
}

export function checkoutAction(checkoutData: CheckoutData) {
  return {
    type: CartActions.CHECKOUT,
    payload: { checkoutData },
  }
}
