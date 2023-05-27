import { render, screen } from '@testing-library/react'
import Greet from './greet'

describe('Greet', () => {
  test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument()
  })

  test('Greet renders with a name', () => {
    render(<Greet name='Lovro' />)
    const textElement = screen.getByText(/hello Lovro/i)
    expect(textElement).toBeInTheDocument()
  })
})
