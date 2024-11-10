import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Demo from './Demo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Demo/>
    </>
  )
}

export default App
