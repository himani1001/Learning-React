import { useState } from 'react'

import './App.css'

function App() {
  const[count, setCount] = useState(10)
  const[counter, setCounter] = useState(13)

  // let count = 1

  const addValue = () => {
  //   count = count + 1
  //   console.log(count);

  // you will get the acess of the previous counter or updated state value
  // they can't be batched as they are depending upon the previous value
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  }
  const addValues = () => {
  //   count = count + 1
  //   console.log(count);

  //batching: react bundle them together and see there's only one method that's being firirng up and only operation is being done, and it's increasing same value by 1 
  // you can use callback () => {}
  setCounter(counter + 1)
  setCounter(counter + 1)
  }

  return (
    <>
    <h1>Hi! This is Himani </h1>
    <p>I'm a Book Lover</p>
    <button
    onClick={addValue}>TBR ({count})</button> {}
    <button
    onClick={addValues}>Read ({counter})</button> {}
    <button>Spotify</button>
    </>
  )
}

export default App
