import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let [message, setMessage] = useState("")

  const addValue = () => {
    if (counter === 20) {
      setMessage("Maximum value reached!")
      return
    } 
    setCounter(prev => prev + 1)
    setMessage('')
  }

  const removeValue = () => {
    if (counter === 0) {
      setMessage("Value should not be negative")
      return
    }
    setCounter((prev) => prev - 1);
    setMessage('')
  }
  

  return (
   <>
    <h3>Counter : {counter}</h3>
    {message && <p style={{color: "red"}}>{message}</p>}
    <button onClick={addValue}>Add</button>
    <br />
    <button onClick={removeValue}>Remove</button>
    <footer>Counter to count value</footer>
   </>
  )
}

export default App
