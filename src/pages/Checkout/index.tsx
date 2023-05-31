import { useState } from 'react'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

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

const checkoutFormValidationSchema = z.object({
  cep: z.string().min(1).max(9),
  address: z.string().min(1),
  number: z.string().min(1),
  complement: z.string().optional(),
  neighborhood: z.string().min(1),
  city: z.string().min(1),
  state: z.string().min(2).max(2),
})

type CheckoutFormData = z.infer<typeof checkoutFormValidationSchema>

export function Checkout() {
  const theme = useTheme()

  const { checkout, checkoutData } = useCartContext()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
    defaultValues: { ...checkoutData },
  })

  const [selectedPaymentType, setSelectedPaymentType] = useState<string | null>(
    checkoutData?.paymentType || null,
  )

  function handleCheckout(checkoutData: CheckoutFormData) {
    if (selectedPaymentType) {
      checkout({
        ...checkoutData,
        paymentType: selectedPaymentType,
      })
    }
  }

  return (
    <CheckoutContainer className="Container">
      <CheckoutForm onSubmit={handleSubmit(handleCheckout)}>
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
              <CardInput
                placeholder="CEP"
                isError={!!errors.cep}
                inputMode="numeric"
                {...register('cep')}
              />
              <CardInput
                placeholder="Rua"
                isError={!!errors.address}
                {...register('address')}
              />
              <CardInput
                placeholder="Número"
                isError={!!errors.number}
                {...register('number')}
              />
              <div>
                <CardInput
                  id="complement"
                  placeholder="Complemento"
                  isError={!!errors.complement}
                  {...register('complement')}
                />
                <label htmlFor="complement">Opcional</label>
              </div>
              <CardInput
                placeholder="Bairro"
                isError={!!errors.neighborhood}
                {...register('neighborhood')}
              />
              <CardInput
                placeholder="Cidade"
                isError={!!errors.city}
                {...register('city')}
              />
              <CardInput
                placeholder="UF"
                isError={!!errors.state}
                {...register('state')}
              />
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
