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
import { useCartContext } from '../../../hooks/useCartContext'
import { Coffee } from '../../../sample/coffees'

interface CoffeeCatalogProps {
  data: Coffee
}

const currency = new Intl.NumberFormat('pt-br', {
  minimumFractionDigits: 2,
})

export function CoffeeCatalog({ data }: CoffeeCatalogProps) {
  const { addItem } = useCartContext()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const amount = formData.get('amount')

    if (amount) {
      addItem({
        id: data.id,
        name: data.name,
        imageUrl: data.imageUrl,
        priceInCents: data.priceInCents,
        amount: Number(amount),
      })
    }
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
