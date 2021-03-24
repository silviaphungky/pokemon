import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './index'


//func testing
it('check button is rendered', () => {
  const { getByTestId } = render(<Button />)
  const btn = getByTestId('button')
  expect(btn).toBeTruthy()
})

test('calls onClick prop when clicked', () => {
  const handleClick = jest.fn()
  const { getByTestId } = render(<Button onClick={ handleClick }/>)
  const btn = getByTestId('button')
  fireEvent.click(btn)
  expect(handleClick).toHaveBeenCalledTimes(1)
})


//styling testing
it('check is button styling props work', () => {
  const { getByTestId } = render(
    <Button 
      color='blue'
      margin='1rem'
      larger
      width='1rem'
    />
  )
  const btn = getByTestId('button')
  expect(btn).toHaveStyle('background: blue')
  expect(btn).toHaveStyle('border: 1px solid blue')
  expect(btn).toHaveStyle('margin: 1rem')
  expect(btn).toHaveStyle('padding: 0.5rem 1.5rem')
  expect(btn).toHaveStyle('width: 1rem')
})
