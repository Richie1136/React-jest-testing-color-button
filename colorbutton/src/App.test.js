import { render, screen } from '@testing-library/react';
import App from './App';

test('button has the correct initial color', () => {
  render(<App />)
  // Find an element with a role of button and text of 'Change to Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to Blue' })
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

});

test('button turns blue when clicked', () => {

})