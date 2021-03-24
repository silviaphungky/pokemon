import React from 'react'
import { render } from '@testing-library/react'
import Badge from './index'


//func testing
it('check badge is rendered', () => {
  const { getByTestId } = render(<Badge />)
  const btn = getByTestId('badge')
  expect(btn).toBeTruthy()
})


//styling testing
it('check is badge styling props work', () => {
  const { getByTestId } = render(
    <Badge 
      color='red'
    />
  )
  const badge = getByTestId('badge')
  expect(badge).toHaveStyle('background: red')
})
