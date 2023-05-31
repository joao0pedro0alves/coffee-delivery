import { FormEvent, useState } from 'react'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { paymentTypes } from '../../repositories/payment_types'
import { useCartContext } from '../../hooks/useCartContext'
import { Icon } from '../../components/Icon'
import { Button } from '../../components/Button'
import { CheckoutConfirm } from './CheckoutConfirm'
import {
  CheckoutContainer,
  CheckoutForm,
  CoffeeCard,
  CoffeeCardHeader,
  CoffeeCardBody,
  CardInput,
} from './styles'

export function Checkout() {
  const theme = useTheme()

  const { checkout } = useCartContext()

  const [selectedPaymentType, setSelectedPaymentType] = useState<string | null>(
    null,
  )

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    if (selectedPaymentType) {
      checkout({
        cep: formData.get('cep') as string,
        address: formData.get('address') as string,
        number: formData.get('number') as string,
        complement: formData.get('complement') as string,
        neighborhood: formData.get('neighborhood') as string,
        city: formData.get('city') as string,
        state: formData.get('state') as string,
        paymentType: selectedPaymentType,
      })
    }
  }

  return (
    <CheckoutContainer className="Container">
      <CheckoutForm onSubmit={handleSubmit}>
        {/* Left */}
        <section>
          <h3>Complete seu pedido</h3>

          {/* Address */}
          <CoffeeCard>
            <CoffeeCardHeader>
              <MapPinLine size={22} color={theme['yellow-dark']} />
              <div>
                <h4>Endereço de Entrega</h4>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </CoffeeCardHeader>
            <CoffeeCardBody>
              <CardInput name="cep" placeholder="CEP" />
              <CardInput name="address" placeholder="Rua" />
              <CardInput name="number" placeholder="Número" />

              <div>
                <CardInput
                  id="complement"
                  name="complement"
                  placeholder="Complemento"
                />
                <label htmlFor="complement">Opcional</label>
              </div>

              <CardInput name="neighborhood" placeholder="Bairro" />
              <CardInput name="city" placeholder="Cidade" />
              <CardInput name="state" placeholder="UF" />
            </CoffeeCardBody>
          </CoffeeCard>

          {/* Payment */}
          <CoffeeCard>
            <CoffeeCardHeader>
              <CurrencyDollar size={22} color={theme.purple} />
              <div>
                <h4>Pagamento</h4>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </CoffeeCardHeader>

            <CoffeeCardBody>
              {paymentTypes.map((paymentType) => {
                return (
                  <Button
                    key={paymentType.id}
                    startIcon={<Icon name={paymentType.iconName} size={16} />}
                    type="button"
                    selected={selectedPaymentType === paymentType.id}
                    onClick={() => setSelectedPaymentType(paymentType.id)}
                  >
                    {paymentType.name}
                  </Button>
                )
              })}
            </CoffeeCardBody>
          </CoffeeCard>
        </section>

        {/* Right */}
        <section>
          <h3>Cafés selecionados</h3>
          <CheckoutConfirm />
        </section>
      </CheckoutForm>
    </CheckoutContainer>
  )
}
