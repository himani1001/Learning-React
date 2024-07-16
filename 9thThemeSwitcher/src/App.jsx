import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
import { ThemeProvider } from './contexts/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])  //if any value in the dependency variable change useEffect() will rerender this component

  //Now the card can grab this themeMode value and that value can be manipulated by the themeButton and the value can be grabbed by the card itself
  //the card don't need to grab the value because the theing is actually being governed by HTML.
  //the functionality part of grabbing is taken care by tailwind

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='flex flex-wrap min-h-screen items-center'>
        <div className='w-full'>
          <div className='w-full max-w-sm mx-auto flex justify-end mb-4'>
            <ThemeButton />
          </div>
          <div className='w-full max-w-sm mx-auto'>
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
