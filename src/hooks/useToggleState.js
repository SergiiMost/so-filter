import { useState } from 'react'

const useToggleState = (value = false) => {
  const [state, setState] = useState(value)

  const toggleState = () => {
    setState(!state)
  }

  return [state, toggleState]
}

export default useToggleState