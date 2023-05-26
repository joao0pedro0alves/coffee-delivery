import {
  CheckoutConfirmContainer,
  CoffeesContainer,
  CoffeeContainer,
  CoffeeControls,
  SummaryContainer,
} from './styles'

import { coffees } from '../../../sample/coffees'
import { Button } from '../../../components/Button'
import { InputNumber } from '../../../components/InputNumber'
import { Trash } from 'phosphor-react'

const currency = new Intl.NumberFormat('pt-br', {
  style: 'currency',
  currency: 'BRL',
})

export function CheckoutConfirm() {
  const coffessInCart = coffees.slice(0, 2)

  return (
    <CheckoutConfirmContainer>
      {/* Coffeess */}
      <CoffeesContainer>
        {coffessInCart.map((coffee) => {
          return (
            <CoffeeContainer key={coffee.id}>
              <CoffeeControls>
                <img src={coffee.imageUrl} alt="" />
                <div>
                  <span>{coffee.name}</span>
                  <div>
                    <InputNumber />
                    <Button
                      type="button"
                      startIcon={<Trash size={16} />}
                      size="small"
                    >
                      Remover
                    </Button>
                  </div>
                </div>
              </CoffeeControls>

              <span>{currency.format(coffee.priceInCents / 100)}</span>
            </CoffeeContainer>
          )
        })}
      </CoffeesContainer>

      {/* Summary */}
      <SummaryContainer>
        <div>
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <span>Total</span>
          <span>R$ 33,20</span>
        </div>
      </SummaryContainer>

      <Button type="submit" variant="primary">
        Confirmar pedido
      </Button>
    </CheckoutConfirmContainer>
  )
}
