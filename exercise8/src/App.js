import './App.css';
import { useState } from 'react'

function App() {
  const [number, setNumber] = useState(0)
  const [oddEven, setOddEven] = useState('Even')

  function calculate(type) {
    if (type === '+') {
      setNumber(number + 1)
    } else if (type === '-') {
      setNumber(number - 1)
    } else {
      setNumber(0)
    }
    if (number % 2 === 1 || number % 2 === -1) {
      setOddEven('Even')
    } else {
      setOddEven('Odd')
    }
  }

  return (
    <div className="App">
      <button type="button" onClick={() => calculate('+')}>+</button>
      <button type="button" onClick={() => calculate('-')}>-</button>
      <button type="button" onClick={() => calculate('0')}>0</button>
      <div>{number}</div>
      <div className='result'>{oddEven}</div>
    </div>
  );
}

export default App;
