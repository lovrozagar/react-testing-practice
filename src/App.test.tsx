import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('should have hello world', () => {
  render(<App />)
  const message = screen.queryByText(/Hello World/i)
  expect(message).toBeVisible()
})
