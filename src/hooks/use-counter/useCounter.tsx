import { useState } from 'react'

type useCounterProps = {
  initialCount?: number
}

function useCounter({ initialCount = 0 }: useCounterProps = {}) {
  const [count, setCount] = useState(initialCount)

  const increment = () => setCount((prevCount) => prevCount + 1)
  const decrement = () => setCount((prevCount) => prevCount - 1)

  return { count, increment, decrement }
}

export default useCounter
