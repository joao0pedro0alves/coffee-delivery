import { MapPin, ShoppingCart } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

import { Button } from '../Button'
import { IconButton } from '../IconButton'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer className="Container">
      <img src={logoCoffeeDelivery} alt="" />

      <div>
        <Button
          title="Alterar endereço"
          variant="secondary"
          startIcon={<MapPin weight="fill" size={22} />}
        >
          Porto Alegre, RS
        </Button>

        <IconButton>
          <ShoppingCart weight="fill" size={22} />
        </IconButton>
      </div>
    </HeaderContainer>
  )
}
