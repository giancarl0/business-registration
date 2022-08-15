import React from 'react'

const useToggle = (initialValue: boolean = false): [boolean, (newValue?: boolean) => void] => {
  const [value, setValue] = React.useState(initialValue)

  const toggle = React.useCallback((newValue?: boolean) => {
    if (newValue || newValue === false) {
      setValue(newValue)
    } else {
      setValue(val => !val)
    }
  }, [])

  return [value, toggle]
}

export default useToggle
