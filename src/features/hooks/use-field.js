import { useState } from 'react'

const useField = (name, type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }
  const reset = () => {
    setValue('')
  }

  return {
    value,
    reset,
    input: {
      name,
      type,
      value,
      onChange,
    },
  }
}

export default useField
