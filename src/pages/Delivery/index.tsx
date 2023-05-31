import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DeliveryContainer,
  DeliveryDetailContainer,
  IconContainer,
} from './styles'

import deliveryIlustration from '../../assets/delivery-ilustration.png'
import { useCartContext } from '../../hooks/useCartContext'
import { paymentTypes } from '../../repositories/payment_types'

export function Delivery() {
  const { checkoutData } = useCartContext()

  const paymentType = paymentTypes.find(
    (type) => type.id === checkoutData?.paymentType,
  )

  return (
    <DeliveryContainer className="Container">
      <h3>Uhu! Pedido confirmado</h3>
      <h4>Agora é só aguardar que logo o café chegará até você</h4>

      <div>
        <DeliveryDetailContainer>
          {/* Address */}
          <div>
            <IconContainer color="purple">
              <MapPin size={18} weight="fill" />
            </IconContainer>

            <span>
              Entrega em{' '}
              <strong>
                {checkoutData?.address}, {checkoutData?.number}
              </strong>{' '}
              {checkoutData?.neighborhood} - {checkoutData?.city},{' '}
              {checkoutData?.state}
              {checkoutData?.complement && <i> - {checkoutData?.complement}</i>}
            </span>
          </div>

          {/* Delivery time */}
          <div>
            <IconContainer color="yellow">
              <Timer size={18} weight="fill" />
            </IconContainer>

            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          {/* Payment type */}
          <div>
            <IconContainer color="yellow-dark">
              <CurrencyDollar size={18} />
            </IconContainer>

            <div>
              <span>Pagamento na entrega</span>
              <strong>{paymentType?.name}</strong>
            </div>
          </div>
        </DeliveryDetailContainer>

        <img
          src={deliveryIlustration}
          alt="Uma ilustração de um entregador em uma moto"
        />
      </div>
    </DeliveryContainer>
  )
}
