import { useState, useEffect, ChangeEvent } from 'react'
import { Minus, Plus } from 'phosphor-react'
import { InputNumberContainer } from './styles'

interface InputNumberProps {
  initialCounter?: number
  min?: number
  max?: number
  step?: number

  onChange?: (newCounterValue: number) => void
}

export function InputNumber({
  initialCounter = 1,
  step = 1,
  min = 1,
  max,
  onChange,
}: InputNumberProps) {
  const [counter, setCounter] = useState(initialCounter)

  useEffect(() => {
    if (onChange) {
      onChange(counter)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter])

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

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = Number(event.target.value)
    setCounter(newValue)
  }

  return (
    <InputNumberContainer>
      <button onClick={handleMinus} type="button">
        <Minus size={16} weight="fill" />
      </button>
      <input
        // readOnly
        name="amount"
        type="number"
        min={min}
        max={max}
        value={counter}
        onChange={handleChange}
      />
      <button onClick={handlePlus} type="button">
        <Plus size={16} weight="fill" />
      </button>
    </InputNumberContainer>
  )
}
