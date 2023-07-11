import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Jsonapp from './Jsonapp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Jsonapp/>
    </div>
  )
}

export default App
