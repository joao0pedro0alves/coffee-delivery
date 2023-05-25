import styled, { css } from 'styled-components'

interface IconButtonContainerProps {
  variant: 'primary' | 'secondary'
}

const primaryStyles = css`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

const secondaryStyles = css`
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  padding: 0.5rem;
`

const variantStyles = {
  primary: primaryStyles,
  secondary: secondaryStyles,
}

export const IconButtonContainer = styled.button<IconButtonContainerProps>`
  cursor: pointer;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem;
  border-radius: 6px;
  transition: 200ms ease-in-out;

  // Variant
  ${(props) => variantStyles[props.variant]}

  &:hover {
    opacity: 0.8;
  }
`
