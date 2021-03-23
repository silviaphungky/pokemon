import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './index'

it('check button is rendered', () => {
  const { queryByTitle } = render(<Button />)
  const btn = queryByTitle('button')
  expect(btn).toBeTruthy()
})

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  const { queryByTitle } = render(<Button onClick={ handleClick }/>)
  const btn = queryByTitle('button')
  fireEvent.click(btn)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
