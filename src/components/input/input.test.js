import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input from './index'


//func testing
it('check input is rendered', () => {
  const { getByTestId } = render(<Input />)
  const input = getByTestId('input')
  expect(input).toBeTruthy()
})

test('calls onChange prop when changed', () => {
  const handleChange = jest.fn()
  const { getByTestId } = render(<Input onChange={ handleChange }/>)
  const input = getByTestId('input')
  fireEvent.change(input, { target: { value: 'test' } })
  expect(input.value).toBe('test')
})

