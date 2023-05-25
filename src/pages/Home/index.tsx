import { Hero } from '../../components/Hero'
import { HomeContainer, StoreContainer, CatalogContainer } from './styles'

import { CoffeeCatalog } from './CoffeeCatalog'
import { coffees } from '../../sample/coffees'

export function Home() {
  return (
    <HomeContainer>
      <Hero />

      <StoreContainer>
        <h3>Nossos cafés</h3>

        <CatalogContainer>
          {coffees.map((coffee) => {
            return <CoffeeCatalog key={coffee.id} data={coffee} />
          })}
        </CatalogContainer>
      </StoreContainer>
    </HomeContainer>
  )
}
