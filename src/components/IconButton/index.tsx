import { ButtonHTMLAttributes, ReactNode } from 'react'
import { IconButtonContainer } from './styles'

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

export function IconButton({
  children,
  variant = 'primary',
  ...buttonProps
}: IconButtonProps) {
  return (
    <IconButtonContainer variant={variant} {...buttonProps}>
      {children}
    </IconButtonContainer>
  )
}
