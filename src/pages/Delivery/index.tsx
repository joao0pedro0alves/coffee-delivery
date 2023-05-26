import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  DeliveryContainer,
  DeliveryDetailContainer,
  IconContainer,
} from './styles'

import deliveryIlustration from '../../assets/delivery-ilustration.png'

export function Delivery() {
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
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
              Farrapos - Porto Alegre, RS
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
              <strong>Cartão de Crédito</strong>
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
