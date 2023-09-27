import "./Navbar.css"

export default function NavBar () {
    return(
        <nav>  
            <ul>
                <li><a className="nav-element" href="#home">Home</a></li>
                <li><a className="nav-element" href="#aboutMe">About</a></li>
                <li><a className="nav-element" href="#projects">Projects</a></li>
                <li><a className="nav-element" href="#contactMe">Contact Me</a></li>
            </ul>
        </nav>
    )
}