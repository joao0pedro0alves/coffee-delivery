import styled from 'styled-components'

export const InputNumberContainer = styled.div`
  height: 2.375rem;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;

  button {
    cursor: pointer;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 6px;
    color: ${(props) => props.theme['purple-dark']};

    &:focus {
      box-shadow: none;
    }
  }

  input {
    width: 20px;
    height: 20px;
    text-align: center;
    background-color: transparent;
    border: 0;

    color: ${(props) => props.theme['base-title']};
    font-size: 1rem;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
`
