import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders app', () => {
  const { queryByTitle } =render(<App />)
  const app = queryByTitle('App')
  
  expect(app).toBeTruthy()
})
