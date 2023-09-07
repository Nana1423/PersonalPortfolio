import { useState } from 'react'
import NavBar from './Components/navbar/Navbar'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
    </>
  )
}

export default App
