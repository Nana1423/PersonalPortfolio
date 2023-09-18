import { Routes, Route } from "react-router-dom"
import Portfolio from "./Portfolio"
import CV from "./CV"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Portfolio/>} />
        <Route path="/cv_en" element={<CV/>} />
      </Routes>
    </>
  )
}

export default App
