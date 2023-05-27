import { render, screen } from '@testing-library/react'
import SingleQueries from './Form'

// GROUP TESTS WITH DESCRIBE
describe('single-queries', () => {
  // TEST
  test('renders correctly', () => {
    // RENDER COMPONENT IN V-DOM SO THAT IT CAN BE TESTED
    render(<SingleQueries />)

    // QUERY PRIORITY (SINGLE):
    // 1. getByRole
    // 2. getByLabelText
    // 3. getByPlaceholderText
    // 4. getByText
    // 5. getByDisplayValue
    // 6. getByAltText
    // 7. getByTitle
    // 8. getByTestId

    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    // STRING
    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()
    // REGEX
    const paragraphElementRegex = screen.getByText(/all fields are mandatory/i)
    expect(paragraphElementRegex).toBeInTheDocument()
    // CALLBACK
    const paragraphElementCallback = screen.getByText((content) =>
      content.startsWith('All fields')
    )
    expect(paragraphElementCallback).toBeInTheDocument()

    const nameElement = screen.getByRole('textbox', { name: 'Name' })
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' })
    expect(nameElement2).toBeInTheDocument()

    // SUBSTRING MATCH
    const nameElement3 = screen.getByPlaceholderText(/fullname/i)
    expect(nameElement3).toBeInTheDocument()
    // FULL STRING MATCH
    const nameElement3Full = screen.getByPlaceholderText(/^fullname$/i)
    expect(nameElement3Full).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('me')
    expect(nameElement4).toBeInTheDocument()

    const nameElement5 = screen.getByTestId('custom-element')
    expect(nameElement5).toBeInTheDocument()

    const spanElement = screen.getByTitle('title')
    expect(spanElement).toBeInTheDocument()

    const imageElement = screen.getByAltText('picture')
    expect(imageElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', { name: 'Bio' })
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()
  })
})
