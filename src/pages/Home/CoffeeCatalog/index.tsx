import { FormEvent } from 'react'
import { ShoppingCartSimple } from 'phosphor-react'
import { IconButton } from '../../../components/IconButton'
import {
  CoffeeContainer,
  CoffeeTypesContainer,
  CoffeeBuyForm,
  CoffeePrice,
} from './styles'

import { InputNumber } from '../../../components/InputNumber'

interface CoffeeCatalogProps {
  data: {
    imageUrl: string
    name: string
    description: string
    priceInCents: number
    types: string[]
  }
}

const currency = new Intl.NumberFormat('pt-br', {
  minimumFractionDigits: 2,
})

export function CoffeeCatalog({ data }: CoffeeCatalogProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <CoffeeContainer>
      <img src={data.imageUrl} alt="" />
      <CoffeeTypesContainer>
        {data.types.map((type) => {
          return <span key={type}>{type}</span>
        })}
      </CoffeeTypesContainer>
      <strong>{data.name}</strong>
      <p>{data.description}</p>

      <CoffeeBuyForm onSubmit={handleSubmit}>
        <CoffeePrice>{currency.format(data.priceInCents / 100)}</CoffeePrice>

        <div>
          <InputNumber />
          <IconButton variant="secondary" type="submit">
            <ShoppingCartSimple weight="fill" size={22} />
          </IconButton>
        </div>
      </CoffeeBuyForm>
    </CoffeeContainer>
  )
}
