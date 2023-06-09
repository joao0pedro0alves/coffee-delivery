import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'primary' | 'secondary'
  size?: 'small' | 'medium'
  selected?: boolean

  startIcon?: ReactNode
  children: ReactNode
}

export function Button({
  variant = 'default',
  size = 'medium',
  selected = false,
  children,
  startIcon,
  ...buttonProps
}: ButtonProps) {
  return (
    <ButtonContainer
      {...buttonProps}
      size={size}
      variant={variant}
      selected={selected}
    >
      {startIcon}
      <span>{children}</span>
    </ButtonContainer>
  )
}
