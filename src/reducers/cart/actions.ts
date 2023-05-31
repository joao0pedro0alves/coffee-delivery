/* eslint-disable no-unused-vars */
import { CartItem } from './reducer'

export enum CartActions {
  ADD_CART_ITEM = 'ADD_CART_ITEM',
  UPDATE_CART_ITEM_AMOUNT = 'UPDATE_CART_ITEM_AMOUNT',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
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
