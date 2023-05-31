import { MapPin, ShoppingCart } from 'phosphor-react'

import { useNavigate, NavLink } from 'react-router-dom'

import { Button } from '../Button'
import { CheckoutButton, HeaderContainer } from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { useCartContext } from '../../hooks/useCartContext'

export function Header() {
  const navigate = useNavigate()

  const { items, checkoutData } = useCartContext()

  return (
    <HeaderContainer className="Container">
      <NavLink to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <div>
        {checkoutData && (
          <Button
            variant="secondary"
            startIcon={<MapPin weight="fill" size={22} />}
          >
            {checkoutData.city}, {checkoutData.state}
          </Button>
        )}

        <CheckoutButton
          onClick={() => navigate('/checkout')}
          title={
            items.length
              ? `Você possui ${items.length} item(s) no carrinho`
              : 'Seu carrinho está vazio'
          }
          badgeContent={items.length}
        >
          <ShoppingCart weight="fill" size={22} />
        </CheckoutButton>
      </div>
    </HeaderContainer>
  )
}
