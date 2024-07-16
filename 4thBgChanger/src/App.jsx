import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('purple')

  // function changeColor(color){
  //   setColor(color)
  // }

  return (

    <div className='w-full h-screen duration-200' style={{ background: color }}>
      <div className='fixed flex flex-wrap justify-center top-8 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
        <button 
          onClick={() => setColor('fuchsia')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{background: 'fuchsia'}}>Fuchsia</button>
          <button 
          onClick={() => setColor('violet')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{background: 'violet'}}>Violet</button>
          <button 
          onClick={() => setColor('pink')}
          className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
          style={{background: 'pink'}}>Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
