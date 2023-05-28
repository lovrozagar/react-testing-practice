### REACT TESTING CHEAT SHEET

### Table of Contents

1. [Render](#render)
2. [Get](#get)
3. [Get All](#get-all)
4. [Query](#query)
5. [Query All](#query-all)
6. [Find](#find)
7. [Find All](#find-all)
8. [User Event](#user-event)
9. [Providers](#providers)
10. [Hooks](#hooks)
11. [Debug](#debug)
12. [Testing Playground Extension](#testing-playground-extension)

#### RENDER

Render element in VDOM so that it can be tested

```
// MOCKED PROP
  const something = [1, 2, 3]

  render(<SomeElement something={something} />)
```

#### GET

Positive queries, if not found error thrown

```
  // PRIORITY:
  // 1. getByRole
  // 2. getByLabelText
  // 3. getByPlaceholderText
  // 4. getByText
  // 5. getByDisplayValue
  // 6. getByAltText
  // 7. getByTitle
  // 8. getByTestId
```

#### GET ALL

Positive queries, if not found error thrown

```
  // PRIORITY:
  // 1. getAllByRole
  // 2. getAllByLabelText
  // 3. getAllByPlaceholderText
  // 4. getAllByText
  // 5. getAllByDisplayValue
  // 6. getAllByAltText
  // 7. getAllByTitle
  // 8. getAllByTestId
```

#### QUERY

Negative or positive queries, useful for asserting an element that is not present, does not throw error if no match, returns null

```
  // PRIORITY:
  // 1. queryByRole
  // 2. queryByLabelText
  // 3. queryByPlaceholderText
  // 4. queryByText
  // 5. queryByDisplayValue
  // 6. queryByAltText
  // 7. queryByTitle
  // 8. queryByTestId
```

#### QUERY ALL

Negative or positive queries, useful for asserting an element that is not present, does not throw error if no match, returns null

```
  // PRIORITY:
  // 1. queryAllByRole
  // 2. queryAllByLabelText
  // 3. queryAllByPlaceholderText
  // 4. queryAllByText
  // 5. queryAllByDisplayValue
  // 6. queryAllByAltText
  // 7. queryAllByTitle
  // 8. queryAllByTestId
```

#### FIND

Positive query for async elements, use async function and await element in test, returns promise, resolves if found, reject if not found within a timeout - default timeout is 1000ms
Passing a object { timeout: millisecondsInteger } to a query modifies the timeout

```
  // PRIORITY:
  // 1. findByRole
  // 2. findByLabelText
  // 3. findByPlaceholderText
  // 4. findByText
  // 5. findByDisplayValue
  // 6. findByAltText
  // 7. findByTitle
  // 8. findByTestId
```

#### FIND ALL

Positive query for async elements, use async function and await element in test, returns promise, resolves if found, reject if not found within a timeout - default timeout is 1000ms
Passing a object { timeout: millisecondsInteger } to a query modifies the timeout

```
  // PRIORITY:
  // 1. findAllByRole
  // 2. findAllByLabelText
  // 3. findAllByPlaceholderText
  // 4. findAllByText
  // 5. findAllByDisplayValue
  // 6. findAllByAltText
  // 7. findAllByTitle
  // 8. findAllByTestId
```

#### USER EVENT

Library for simulating user events, use async function and await user interactions

```
import user from '@testing-library/user-event'

const button = screen.getByRole('button', { name: 'someButton' })
await user.click(button)
```

MOUSE

Convenience APIs

```
click()
dblClick()
tripleClick()
hover()
unhover()
```

Pointer APIs

```
// SIMULATE LEFT CLICK
pointer('[MouseLeft]')
// SIMULATE LEFT CLICK FOLLOWED BY A RIGHT CLICK
pointer('[MouseLeft][MouseRight]')
// POINTER PRESS WITHOUT RELEASE
pointer('[MouseLeft>]')
// POINTER RELEASE
pointer('[/MouseLeft]')
```

KEYBOARD

Convenience API

```
tab()
type() // type(element, string)
```

Utility API

```
clear() // e.g. userEvent.clear(element)
selectOptions() // e.g. userEvent.selectOptions(element, [value, label])
deselectOptions() // e.g userEvent.deselectOptions(element, value)
upload() // e.g. userEvent.upload(input, file)
```

Clipboard API

```
copy()
cut()
```

Keyboard API

```
keyboard()
// examples
keyboard('foo') // translates to f, o, o
keyboard('{Shift>}A{/Shift}') // translates to: Shift(down), A, Shift(up)
```

#### Providers

To test the components with the existing app providers, we can pass the provider to the render option for a one off test or create a test-utils.tsx file in src so that each component is tested with a provider.

```
// ONE OFF PROVIDER TEST
render(<SomeComponent />, { wrapper: AppProviders })

// PROVIDER FOR ALL TESTS

// AppProviders.tsx
function AppProviders({ children }: { children: React.ReactNode }){
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}

// test-utils.tsx
import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import {AppProviders} from './AppProviders'

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
```

When using the test-utils option for all components, it is necessary to import from test-utils rather then @testing-library/react

Example:

```
import {render, screen} from '../../test-utils'
```

#### HOOKS

When testing hooks, instead of the render function we should call the renderHook() and pass in the hook.
The 'result' should be destructured from the renderHook call and we can than make any assertions or call methods from result.current.

Example

```
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
```

#### DEBUG

Visualize the DOM at any given point in the test

```
screen.debug()

// OR

const view = render(<SomeElement something={something} />)
logRoles(view.container)
```

#### TESTING PLAYGROUND EXTENSION

Level 9000 hack for recommending optimal query method, find testing playground in chrome console and inspect page element

[Install Testing Playground](https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano)
