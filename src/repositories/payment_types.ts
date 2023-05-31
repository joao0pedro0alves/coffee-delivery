import { PaymentType } from './dto/PaymentType'

export const paymentTypes: PaymentType[] = [
  {
    id: 'cartao-de-credito',
    name: 'Cartão de crédito',
    iconName: 'CreditCard',
  },
  { id: 'cartao-de-debito', name: 'Cartão de débito', iconName: 'Bank' },
  { id: 'dinheiro', name: 'Dinheiro', iconName: 'Money' },
]
