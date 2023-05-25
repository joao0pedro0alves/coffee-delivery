import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const StoreContainer = styled.div`
  margin: 2rem 0;

  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CatalogContainer = styled.div`
  margin: 3.375rem 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
`
