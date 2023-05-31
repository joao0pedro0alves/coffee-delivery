import { createElement } from 'react'
import { CreditCard, Bank, Money } from 'phosphor-react'

const Icons = {
  CreditCard,
  Bank,
  Money,
} as const

export type IconName = keyof typeof Icons

interface IconProps {
  name: IconName
  size: number
}

export function Icon({ name, size }: IconProps) {
  if (typeof Icons[name] !== 'undefined') {
    return createElement(Icons[name], {
      key: name,
      size,
    })
  }

  return null
}
