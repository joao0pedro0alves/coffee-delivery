import styled from 'styled-components'
import { InputNumberContainer } from '../../../components/InputNumber/styles'

export const CheckoutConfirmContainer = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  button {
    width: 100%;
  }
`

export const CoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const CoffeeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  padding-bottom: 2rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > span {
    white-space: nowrap;
    font-weight: 700;
  }
`

export const CoffeeControls = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    max-width: 4rem;
    max-height: 4rem;
  }

  div {
    > span {
      color: ${(props) => props.theme['base-subtitle']};
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    ${InputNumberContainer} {
      height: 2rem;
    }
  }
`

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`
