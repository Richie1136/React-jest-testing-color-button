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
      <button onClick={handleClick} disabled={isButtonDisabled} style={{ backgroundColor: buttonColor }}>Change to {newButtonColor}</button>
      <input type='checkbox' onChange={handleCheckbox} />
    </div>
  );
}

export default App;
