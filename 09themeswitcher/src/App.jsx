
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/Theme'
import ThemeButton from './components/ThemeButton'
import Card from './components/Card'
function App() {

const [themeMode, setThemeMode] = useState('light')
const lightTheme = () =>{
  setThemeMode("light")
}

const darkTheme = () =>{
  setThemeMode("dark")
}

useEffect(() => {
  document.querySelector('html').classList.remove('dark', 'light')
  document.querySelector('html').classList.add(themeMode)
},[themeMode])

// actual change of theme
  return (
    <>
      < ThemeProvider value={{themeMode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* theme */}
            < ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            < Card />
          </div>
        </div>
      </div>
</ThemeProvider>
    </>
  )
}

export default App
