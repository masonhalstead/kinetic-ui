import PropTypes from 'prop-types'
import { useCallback, useEffect } from 'react'

export const useDebounce = (fn, value, debounce, delay, dependency) => {
  const callback = useCallback(fn, dependency)

  useEffect(() => {
    if (value === debounce) {
      return
    }
    const handler = setTimeout(() => {
      if (delay) {
        callback()
      }
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [callback, delay])
}

useDebounce.defaultProps = {
  dependency: [],
  delay: null,
  effect: () => {}
}
useDebounce.propTypes = {
  delay: PropTypes.number,
  dependency: PropTypes.array,
  effect: PropTypes.func
}
