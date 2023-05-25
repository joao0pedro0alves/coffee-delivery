import styled from 'styled-components'

const ICON_VARIANTS = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  purple: 'purple',
} as const

interface IconContainerProps {
  color: keyof typeof ICON_VARIANTS
}

export const HeroContainer = styled.div`
  padding: 5.75rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

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
