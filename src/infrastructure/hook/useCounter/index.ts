import { useState } from 'react'

export const useCounter = () => {
  const [counter, setCounter] = useState(0)

  const mas = () => setCounter(counter + 1)
  const menos = () => setCounter(counter - 1)
  const zero = () => setCounter(0)

  return {
    counter,
    mas,
    menos,
    zero,
  }
}
