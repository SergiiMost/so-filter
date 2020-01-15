import { useState } from 'react'

const useFormInput = (value) => {
  const [input, setInput] = useState(value)

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleDirectChange = (val) => {
    setInput(val)
  }

  return [input, handleInputChange, handleDirectChange]
}

export default useFormInput