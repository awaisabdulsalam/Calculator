import React, { useState } from 'react'
import './App.css';

function App() {

  const [result, setResult] = useState("")

  const handleEvent = (e) => {
    setResult(result.concat(e.target.name))
  }
  const clearEvent = () => {
    setResult('');
  }
  const backspaceEvent = () => {
    setResult(result.slice(0, result.length - 1));
  }
  const calculate = () => {
    setResult(eval(result).toString());
  }

  return (
   <main className='container'>
    <form>
      <input type='text' value={result}/>
    </form>
    <div className='keys'>
    <button onClick={clearEvent} id='clear'>Clear</button>
    <button onClick={backspaceEvent} id='backspace'>C</button>
    <button name='/' className='sign' onClick={handleEvent}>/</button>
    <button name='7' onClick={handleEvent}>7</button>
    <button name='8' onClick={handleEvent}>8</button>
    <button name='9' onClick={handleEvent}>9</button>
    <button name='*' className='sign' onClick={handleEvent}>*</button>
    <button name='4' onClick={handleEvent}>4</button>
    <button name='5' onClick={handleEvent}>5</button>
    <button name='6' onClick={handleEvent}>6</button>
    <button name='-' className='sign' onClick={handleEvent}>-</button>
    <button name='1' onClick={handleEvent}>1</button>
    <button name='2' onClick={handleEvent}>2</button>
    <button name='3' onClick={handleEvent}>3</button>
    <button name='+' className='sign' onClick={handleEvent}>+</button>
    <button name='0' onClick={handleEvent}>0</button>
    <button name='.' onClick={handleEvent}>.</button>
    <button onClick={calculate} id="equal">=</button>
    </div>
   </main>
  );
}

export default App;
