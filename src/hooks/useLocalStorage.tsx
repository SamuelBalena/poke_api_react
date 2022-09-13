import React, { useCallback, useState } from 'react'

export function useLocalStorage(key: string, initialValue = '') {
  const [state, setState] = useState(() => {
    try {
      const storedValue: null | string = localStorage.getItem(key)
      return setState ? JSON.parse(storedValue) : initialValue
    } catch {
      return initialValue
    }
  })

  const setValue = useCallback(
    (value: string) => {
      try {
        setState(value)
        localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        console.log(error)
      }
    },
    [key]
  )

  return state
}
