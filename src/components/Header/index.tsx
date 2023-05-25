import { MapPin, ShoppingCart } from 'phosphor-react'

import { useNavigate, NavLink } from 'react-router-dom'

import { Button } from '../Button'
import { CheckoutButton, HeaderContainer } from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  const navigate = useNavigate()

  return (
    <HeaderContainer className="Container">
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <div>
        <Button
          title="Alterar endereço"
          variant="secondary"
          startIcon={<MapPin weight="fill" size={22} />}
        >
          Porto Alegre, RS
        </Button>

        <CheckoutButton
          onClick={() => navigate('/checkout')}
          title="Você possui 2 items no carrinho"
          badgeContent={2}
        >
          <ShoppingCart weight="fill" size={22} />
        </CheckoutButton>
      </div>
    </HeaderContainer>
  )
}
