import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-blue-200 p-3 rounded-md'>Using Tailwind</h1>
      <Card username="Lando" post = "https://www.thepaddockmagazine.com/wp-content/uploads/2023/04/00001-1.jpeg"/>
      <Card username ="Oscar" post = "https://www.thepaddockmagazine.com/wp-content/uploads/2023/04/00001-1.jpeg"/>
    </>
  )
}

export default App
