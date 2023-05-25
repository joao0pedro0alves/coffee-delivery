const COFFEE_TYPES = {
  TRADICIONAL: 'TRADICIONAL',
  GELADO: 'GELADO',
  ESPECIAL: 'ESPECIAL',
  ALCOOLICO: 'ALCOÓLICO',
  'COM LEITE': 'COM LEITE',
}

type CoffeeType = keyof typeof COFFEE_TYPES

interface Coffee {
  id: string
  name: string
  imageUrl: string

  description: string
  priceInCents: number
  types: CoffeeType[]
}

export const coffees: Coffee[] = [
  {
    id: 'expresso-tradicional',
    name: 'Expresso Tradicional',
    imageUrl: '/coffees/expresso.png',
    description: 'O tradicional café feito com água quente e grãos moídos',
    priceInCents: 990,
    types: ['TRADICIONAL'],
  },
  {
    id: 'expresso-americano',
    name: 'Expresso Americano',
    imageUrl: '/coffees/expresso-americano.png',
    description: 'Expresso diluído, menos intenso que o tradicional',
    priceInCents: 990,
    types: ['TRADICIONAL'],
  },
  {
    id: 'expresso-cremoso',
    name: 'Expresso Cremoso',
    imageUrl: '/coffees/expresso-cremoso.png',
    description: 'Café expresso tradicional com espuma cremosa',
    priceInCents: 990,
    types: ['TRADICIONAL'],
  },
  {
    id: 'expresso-gelado',
    name: 'Expresso Gelado',
    imageUrl: '/coffees/expresso-gelado.png',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    priceInCents: 990,
    types: ['TRADICIONAL', 'GELADO'],
  },
  {
    id: 'cafe-com-leite',
    name: 'Café com Leite',
    imageUrl: '/coffees/cafe-com-leite.png',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    priceInCents: 990,
    types: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 'latte',
    name: 'latte',
    imageUrl: '/coffees/latte.png',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    priceInCents: 990,
    types: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 'capuccino',
    name: 'Capuccino',
    imageUrl: '/coffees/capuccino.png',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    priceInCents: 990,
    types: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 'macchiato',
    name: 'Macchiato',
    imageUrl: '/coffees/macchiato.png',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    priceInCents: 990,
    types: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 'mocaccino',
    name: 'Mocaccino',
    imageUrl: '/coffees/mocaccino.png',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    priceInCents: 990,
    types: ['TRADICIONAL', 'COM LEITE'],
  },
  {
    id: 'chocolate-quente',
    name: 'Chocolate Quente',
    imageUrl: '/coffees/chocolate-quente.png',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    priceInCents: 990,
    types: ['ESPECIAL', 'COM LEITE'],
  },
  {
    id: 'cubano',
    name: 'Cubano',
    imageUrl: '/coffees/cubano.png',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    priceInCents: 990,
    types: ['ESPECIAL', 'ALCOOLICO', 'GELADO'],
  },
  {
    id: 'havaiano',
    name: 'Havaiano',
    imageUrl: '/coffees/havaiano.png',
    description: 'Bebida adocicada preparada com café e leite de coco',
    priceInCents: 990,
    types: ['ESPECIAL'],
  },
  {
    id: 'arabe',
    name: 'Árabe',
    imageUrl: '/coffees/arabe.png',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    priceInCents: 990,
    types: ['ESPECIAL'],
  },
  {
    id: 'irlandes',
    name: 'Irlandês',
    imageUrl: '/coffees/irlandes.png',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    priceInCents: 990,
    types: ['ESPECIAL', 'ALCOOLICO'],
  },
]