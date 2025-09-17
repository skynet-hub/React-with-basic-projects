import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [counter, setCounter] = useState(0)

  const addCounter = () => {
    setCounter(counter + 1)
  }

  const reduceCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>React course: {counter}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={addCounter}>+1</button>{' '}
      <button onClick={reduceCounter}>-1</button>
      <footer>First react app</footer>
    </>
  )
}

export default App
