import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Counter from './Counter'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)

    const count = screen.getByRole('heading', { level: 1 })
    expect(count).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    expect(incrementButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)

    const count = screen.getByRole('heading', { level: 1 })
    expect(count).toHaveTextContent('0')
  })

  test('renders a count of 1', async () => {
    user.setup()
    render(<Counter />)

    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await user.click(incrementButton)

    const count = screen.getByRole('heading', { level: 1 })
    expect(count).toHaveTextContent('1')
  })

  test('renders a count of 2 after clicking the increment button twice', async () => {
    user.setup()
    render(<Counter />)

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)
    await user.click(incrementButton)

    const count = screen.getByRole('heading', { level: 1 })
    expect(count).toHaveTextContent('2')
  })

  test('renders a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)

    const amountInput = screen.getByRole('spinbutton')
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)

    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    await user.click(setButton)

    const count = screen.getByRole('heading', { level: 1 })
    expect(count).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    user.setup()
    render(<Counter />)

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })

    await user.tab()
    expect(incrementButton).toHaveFocus()

    await user.tab()
    expect(amountInput).toHaveFocus()

    await user.tab()
    expect(setButton).toHaveFocus()
  })
})
