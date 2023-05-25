import styled, { css } from 'styled-components'

interface ButtonContainerProps {
  variant: 'default' | 'primary' | 'secondary'
  size: 'small' | 'medium'
}

const defaultStyles = css`
  text-transform: uppercase;
  font-weight: 400;

  background-color: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }
`

const primaryStyles = css`
  text-transform: uppercase;
  font-weight: 700;

  background-color: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`

const secondaryStyles = css`
  text-transform: none;
  font-weight: 400;

  background-color: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};

  &:hover {
    opacity: 0.8;
  }

  :focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.purple};
  }
`

const variantStyles = {
  default: defaultStyles,
  primary: primaryStyles,
  secondary: secondaryStyles,
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 0;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 0.5rem 0.75rem;
  border-radius: 6px;

  transition: 200ms ease-in-out;

  // Variant
  ${(props) => variantStyles[props.variant]}

  // Size
  height: ${(props) => (props.size === 'medium' ? '2.8rem' : '2rem')};
  font-size: ${(props) => (props.size === 'medium' ? '0.875rem' : '0.75rem')};
`
