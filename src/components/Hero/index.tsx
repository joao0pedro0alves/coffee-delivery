import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HeroBackground,
  HeroDetailContainer,
  IconContainer,
  HeroContainer,
} from './styles'

import heroImage from '../../assets/hero-coffee-delivery.png'

export function Hero() {
  return (
    <HeroBackground>
      <HeroContainer className="Container">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <HeroDetailContainer>
            <div>
              <IconContainer color="yellow-dark">
                <ShoppingCart weight="fill" size={16} />
              </IconContainer>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <IconContainer color="base-text">
                <Package weight="fill" size={16} />
              </IconContainer>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <IconContainer color="yellow">
                <Timer weight="fill" size={16} />
              </IconContainer>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <IconContainer color="purple">
                <Coffee weight="fill" size={16} />
              </IconContainer>
              <span>O café chega fresquinho até você</span>
            </div>
          </HeroDetailContainer>
        </div>

        <img src={heroImage} alt="" />
      </HeroContainer>
    </HeroBackground>
  )
}
