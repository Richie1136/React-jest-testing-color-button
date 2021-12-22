import './App.css';
import { useState } from 'react'

function App() {

  const [buttonColor, setButtonColor] = useState('red')
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)

  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  const handleClick = () => {
    setButtonColor(newButtonColor)
  }

  const handleCheckbox = (e) => {
    setIsButtonDisabled(e.target.checked)
  }

  return (
    <div className="App">
      <button onClick={handleClick} disabled={isButtonDisabled} style={{ backgroundColor: isButtonDisabled ? 'gray' : buttonColor }}>Change to {newButtonColor}</button>
      <input id='disable-button-checkbox' type='checkbox' onChange={handleCheckbox} />
      <label htmlFor='disable-button-checkbox'>Disable Button</label>
    </div>
  );
}

export default App;
