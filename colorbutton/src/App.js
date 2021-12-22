import './App.css';
import { useState } from 'react'

export const replaceCamelWithSpaces = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {

  const [buttonColor, setButtonColor] = useState('MediumVioletRed')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'Midnight Blue' : 'MediumVioletRed'

  const handleClick = () => {
    setButtonColor(newButtonColor)
  }

  const handleCheckbox = (e) => {
    setIsButtonDisabled(e.target.checked)
  }

  return (
    <div className="App">
      <button onClick={handleClick} disabled={isButtonDisabled} style={{ backgroundColor: isButtonDisabled ? 'gray' : buttonColor }}>Change to {replaceCamelWithSpaces(newButtonColor)}</button>
      <input id='disable-button-checkbox' type='checkbox' onChange={handleCheckbox} />
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default App;
