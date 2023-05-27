import { render, screen, logRoles } from '@testing-library/react'
import Skills from './Skills'

describe('all queries', () => {
  const skills = ['HTML', 'CSS', 'Javascript']

  test('renders correctly', () => {
    // RENDER COMPONENT IN V-DOM SO THAT IT CAN BE TESTED
    render(<Skills skills={skills} />)

    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('renders a list of skills', () => {
    // RENDER COMPONENT IN V-DOM SO THAT IT CAN BE TESTED
    render(<Skills skills={skills} />)

    // QUERY PRIORITY (ALL):
    // 1. getAllByRole
    // 2. getAllByLabelText
    // 3. getAllByPlaceholderText
    // 4. getAllByText
    // 5. getAllByDisplayValue
    // 6. getAllByAltText
    // 7. getAllByTitle
    // 8. getAllByTestId

    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders Login button', () => {
    render(<Skills skills={skills} />)

    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  // queryBy...
  // used for identifying elements that are not currently visible, instead of an error it returns null

  test('Start learning button is not rendered', () => {
    render(<Skills skills={skills} />)

    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />)
    // const view = render(<Skills skills={skills} />)
    // logRoles(view.container)
    // screen.debug()
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      { timeout: 2000 }
    )
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument()
  })
})
