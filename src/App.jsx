import NavBar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'

function App() {

  return (
    <>
     <NavBar/>
     <main className='slider'>
      <div className='slider-element'>
        <Hero />
      </div>
     </main>
    </>
  )
}

export default App
