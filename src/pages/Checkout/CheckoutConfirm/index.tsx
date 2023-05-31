import {
  CheckoutConfirmContainer,
  CoffeesContainer,
  CoffeeContainer,
  CoffeeControls,
  SummaryContainer,
} from './styles'

import { Button } from '../../../components/Button'
import { InputNumber } from '../../../components/InputNumber'
import { Trash } from 'phosphor-react'
import { useCartContext } from '../../../hooks/useCartContext'

const currency = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})

export function CheckoutConfirm() {
  const {
    items: coffessInCart,
    updateItemAmount,
    removeItem,
  } = useCartContext()

  const itemsPriceInCents = coffessInCart.reduce((acc, item) => {
    return acc + item.priceInCents * item.amount
  }, 0)

  const deliveryPriceInCents = itemsPriceInCents > 0 ? 350 : 0
  const totalInCents = deliveryPriceInCents + itemsPriceInCents

  return (
    <CheckoutConfirmContainer>
      {/* Coffeess */}
      <CoffeesContainer>
        {coffessInCart.map((coffee) => {
          const priceInCents = coffee.priceInCents * coffee.amount

          return (
            <CoffeeContainer key={coffee.id}>
              <CoffeeControls>
                <img src={coffee.imageUrl} alt="" />
                <div>
                  <span>{coffee.name}</span>
                  <div>
                    <InputNumber
                      onChange={(newAmount) =>
                        updateItemAmount(coffee.id, newAmount)
                      }
                      initialCounter={coffee.amount}
                    />
                    <Button
                      type="button"
                      startIcon={<Trash size={16} />}
                      size="small"
                      onClick={() => removeItem(coffee.id)}
                    >
                      Remover
                    </Button>
                  </div>
                </div>
              </CoffeeControls>

              <span>{currency.format(priceInCents / 100)}</span>
            </CoffeeContainer>
          )
        })}
      </CoffeesContainer>

      {/* Summary */}
      <SummaryContainer>
        <div>
          <span>Total de itens</span>
          <span>{currency.format(itemsPriceInCents / 100)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>{currency.format(deliveryPriceInCents / 100)}</span>
        </div>
        <div>
          <span>Total</span>
          <span>{currency.format(totalInCents / 100)}</span>
        </div>
      </SummaryContainer>

      <Button
        disabled={coffessInCart.length === 0}
        type="submit"
        variant="primary"
      >
        Confirmar pedido
      </Button>
    </CheckoutConfirmContainer>
  )
}
