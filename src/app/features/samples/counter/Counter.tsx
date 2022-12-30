import React from 'react'
import { x } from '@xstyled/styled-components'
import type { RootState } from '../../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <x.div>
      <x.h2>Counter</x.h2>
      <x.p>This is an example implementation of the React Tool kit</x.p>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </x.div>
  )
}