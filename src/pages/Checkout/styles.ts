import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 2.5rem;
`

export const CheckoutForm = styled.form`
  display: flex;
  gap: 2rem;

  section {
    flex: 1;
  }

  h3 {
    margin-bottom: 1rem;
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CoffeeCard = styled.div`
  max-width: 640px;

  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  h4 {
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeeCardHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 3rem;

  span {
    font-size: 0.875rem;
  }
`

export const CoffeeCardBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  button {
    flex: 1;
    justify-content: flex-start;
    font-size: 0.75rem;
  }

  div {
    position: relative;
    flex: 1;
    display: flex;

    label {
      position: absolute;
      font-style: italic;
      font-size: 0.75rem;
      color: ${(props) => props.theme['base-label']};

      top: 50%;
      right: 0.75rem;
      transform: translateY(-50%);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

interface CardInputProps {
  isError: boolean
}

export const CardInput = styled.input<CardInputProps>`
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border: 1px solid
    ${(props) =>
      props.isError ? props.theme['base-error'] : props.theme['base-button']};
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;

  &[name='address'] {
    width: 100%;
  }

  &[name='state'] {
    width: 3.75rem;
  }

  &[name='complement'],
  &[name='city'] {
    flex: 1;
  }
`
