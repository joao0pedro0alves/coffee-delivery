import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
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
  const navigate = useNavigate()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    navigate('/delivery')
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
              <Button
                selected
                startIcon={<CreditCard size={16} />}
                type="button"
              >
                Cartão de crédito
              </Button>
              <Button startIcon={<Bank size={16} />} type="button">
                Cartão de débito
              </Button>
              <Button startIcon={<Money size={16} />} type="button">
                Dinheiro
              </Button>
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
