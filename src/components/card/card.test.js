import React from 'react'
import { render } from '@testing-library/react'
import Card from './index'

//func testing
it('check card is rendered', () => {
  const { getByTestId } = render(<Card />)
  const btn = getByTestId('card')
  expect(btn).toBeTruthy()
})

//styling testing
it('check is card styling props work', () => {
  const { getByTestId } = render(
    <Card 
      background='red'
    />
  )
  const card = getByTestId('card')
  expect(card).toHaveStyle('background: red')
  expect(card).toHaveStyle('border: 1px solid red')
})
