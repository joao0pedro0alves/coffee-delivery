import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { InputNumberContainer } from './styles'

interface InputNumberProps {
  initialCounter?: number
  min?: number
  max?: number
  step?: number
}

export function InputNumber({
  initialCounter = 1,
  step = 1,
  min = 1,
  max,
}: InputNumberProps) {
  const [counter, setCounter] = useState(initialCounter)

  function handleMinus() {
    setCounter((state) => {
      if (state > min) return state - step
      else return state
    })
  }
  function handlePlus() {
    setCounter((state) => {
      if (max && state >= max) return state
      return state + step
    })
  }

  return (
    <InputNumberContainer>
      <button onClick={handleMinus} type="button">
        <Minus size={16} weight="fill" />
      </button>
      <input
        disabled
        name="amount"
        type="number"
        min={min}
        max={max}
        value={counter}
      />
      <button onClick={handlePlus} type="button">
        <Plus size={16} weight="fill" />
      </button>
    </InputNumberContainer>
  )
}
