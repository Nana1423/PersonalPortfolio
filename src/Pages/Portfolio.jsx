import NavBar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import AboutMe from '../Components/AboutMe/AboutMe'
import Projects from '../Components/Projects/Projects'

export default function Portfolio() {
    return (
        <>
            <NavBar />
            <main className='slider'>
                <div className='slider-element'>
                    <Hero />
                </div>
                <div className='slider-element'>
                    <AboutMe />
                </div>
                <div className='slider-element'>
                    <Projects />
                </div>
            </main>
        </>
    )
}