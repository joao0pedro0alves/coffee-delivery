import styled from 'styled-components'

import heroBackground from '../../assets/hero-background.png'

const ICON_VARIANTS = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  purple: 'purple',
} as const

interface IconContainerProps {
  color: keyof typeof ICON_VARIANTS
}

export const HeroBackground = styled.div`
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  padding-top: 5.75rem;
  padding-bottom: 5.75rem;

  img {
    flex: 1;
    max-width: 30rem;
  }

  > div {
    max-width: 36rem;
  }

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-title']};
    margin-bottom: 1rem;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    font-weight: 400;
  }

  // md
  @media (max-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 3rem;

    > div {
      max-width: 100vw;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1rem;
      }
    }

    img {
      display: none;
    }
  }
`

export const HeroDetailContainer = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.875rem;
  }

  span {
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const IconContainer = styled.span<IconContainerProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme[props.color]};
  color: ${(props) => props.theme.white};

  display: flex;
  justify-content: center;
  align-items: center;
`
