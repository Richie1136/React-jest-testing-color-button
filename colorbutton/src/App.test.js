import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App'

test('button has the correct initial color', () => {
  render(<App />)
  // Find an element with a role of button and text of 'Change to Midnight Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  // expect the background color to be MediumVioletRed
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })

  fireEvent.click(colorButton)
  // expect the background color to be Midnight Blue
  expect(colorButton).toHaveStyle({ backgroundColor: 'Midnight Blue' });

  // expect the button text to be 'Change to Medium Violet Red'

  expect(colorButton.textContent).toBe('Change to Medium Violet Red')
})

test('initial conditions', () => {
  render(<App />)
  // check that the button starts out enabled

  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(colorButton).toBeEnabled()

  // check that the checkbox starts out unchecked

  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('Checkbox disabled button on first click and enabled on second click', () => {
  render(<App />)

  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })


  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('Disabled button has gray background and reverts to Medium Violet Red', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  // disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
  // re-enable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'Medium Violet Red' });
})

test('Clicked disabled button has gray background and reverts to Midnight Blue', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  // expect button to be blue
  fireEvent.click(colorButton)
  // disable button
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'gray' })
  // expect the background color to be Midnight Blue
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({ backgroundColor: 'Midnight Blue' });
})

describe('Spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')

  })
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')

  })
})

