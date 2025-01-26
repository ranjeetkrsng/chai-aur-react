import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    //setCount(count + 1);
  }
  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
      //setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App
