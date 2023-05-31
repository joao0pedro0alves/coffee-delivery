import { produce } from 'immer'
import { CartActions } from './actions'

export interface CartItem {
  id: string
  name: string
  amount: number
  priceInCents: number
  imageUrl: string
}

export interface CheckoutData {
  cep: string
  address: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  paymentType: string
}

interface CartState {
  items: CartItem[]
  checkoutData: null | CheckoutData
}

interface CartAction {
  type: CartActions
  payload: any
}

export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case CartActions.ADD_CART_ITEM: {
      const newItem: CartItem = action.payload.newItem

      return produce(state, (draft) => {
        const index = state.items.findIndex(
          (cartItem) => cartItem.id === newItem.id,
        )

        const isNew = index < 0

        if (isNew) {
          draft.items.push(newItem)
        } else {
          draft.items[index].amount = newItem.amount
        }
      })
    }
    case CartActions.UPDATE_CART_ITEM_AMOUNT: {
      return produce(state, (draft) => {
        const index = state.items.findIndex(
          (cartItem) => cartItem.id === action.payload.itemId,
        )

        draft.items[index].amount = action.payload.newAmount
      })
    }
    case CartActions.REMOVE_CART_ITEM: {
      return produce(state, (draft) => {
        const index = state.items.findIndex(
          (cartItem) => cartItem.id === action.payload.itemId,
        )

        draft.items.splice(index, 1)
      })
    }

    case CartActions.CHECKOUT: {
      return produce(state, (draft) => {
        draft.checkoutData = action.payload.checkoutData
        draft.items = []
      })
    }
    default:
      return state
  }
}
