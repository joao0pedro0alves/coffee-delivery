import styled, { css } from 'styled-components'

const ICON_VARIANTS = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
} as const

interface IconContainerProps {
  color: keyof typeof ICON_VARIANTS
}

export const DeliveryContainer = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;

    margin-bottom: 0.25rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h4 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
  }

  > div {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;

    span,
    strong {
      display: block;
    }

    span strong {
      display: inline-block;
    }
  }

  @media (max-width: 768px) {
    img {
      display: none;
    }

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`

export const DeliveryDetailContainer = styled.div`
  position: relative;

  width: 526px;
  padding: 2.5rem;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  background-image: ${({ theme }) => css`
    linear-gradient(${theme.background}, ${theme.background}),
      radial-gradient(circle at top left, ${theme.yellow}, ${theme.purple});
    background-origin: border-box;
    background-clip: padding-box, border-box;
  `};

  display: flex;
  flex-direction: column;
  gap: 2.3rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  min-width: 2rem;
  min-height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;
`
