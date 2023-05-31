const COFFEE_TYPES = {
  TRADICIONAL: 'TRADICIONAL',
  GELADO: 'GELADO',
  ESPECIAL: 'ESPECIAL',
  ALCOOLICO: 'ALCOÓLICO',
  'COM LEITE': 'COM LEITE',
}

type CoffeeType = keyof typeof COFFEE_TYPES

export interface Coffee {
  id: string
  name: string
  imageUrl: string

  description: string
  priceInCents: number
  types: CoffeeType[]
}
