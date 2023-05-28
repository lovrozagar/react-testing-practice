import { screen, render } from '@testing-library/react'
import Parent from './parent'

type mockProps = {
  text: string
}

const textContent = ['learning', 'react', 'testing']

vi.mock('./child', () => ({
  default: vi.fn(({ text }: mockProps) => <div>{text}</div>),
}))

describe('parent', () => {
  test('renders correctly', () => {
    render(<Parent textContent={textContent} />)

    const titleElement = screen.getByText('Parent')
    expect(titleElement).toBeInTheDocument()
  })

  test('renders text content', () => {
    render(<Parent textContent={textContent} />)

    const contentListItemElements = screen.getAllByRole('listitem')
    expect(contentListItemElements).toHaveLength(textContent.length)
  })
})
