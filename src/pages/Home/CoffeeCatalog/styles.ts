import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  padding: 1.25rem 1.5rem;

  max-width: 256px;
  max-height: 310px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  strong {
    font-size: 1.25rem;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['base-subtitle']};

    display: inline-block;
    margin-bottom: 0.5rem;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeTypesContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    background-color: ${(props) => props.theme['yellow-light']};
    line-height: 1;

    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const CoffeeBuyForm = styled.form`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CoffeePrice = styled.span`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: right;

  &:before {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1;
    text-align: left;
    display: inline-block;
    margin-right: 0.25rem;

    content: 'R$';
  }
`
