import styled, { css } from 'styled-components'
import { IconButton } from '../IconButton'

interface CheckoutButtonProps {
  badgeContent: number
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 2rem;

  a:focus {
    box-shadow: none;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const CheckoutButton = styled(IconButton)<CheckoutButtonProps>`
  position: relative;

  ${(props) => {
    if (props.badgeContent > 0) {
      return css`
        &:after {
          content: '${props.badgeContent}';
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;

          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;
          background-color: ${props.theme['yellow-dark']};
          color: ${props.theme.white};

          top: -0.625rem;
          right: -0.625rem;

          text-align: center;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: -0.06em;
        }
      `
    }
  }}
`
