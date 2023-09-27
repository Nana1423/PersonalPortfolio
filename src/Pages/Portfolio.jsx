// Components
import NavBar from '../Components/navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import AboutMe from '../Components/AboutMe/AboutMe'
import Projects from '../Components/Projects/Projects'
import Footer from '../Components/Footer/Footer'

// Images
import IpDemo from "../../public/images/IpDemo.png"
import TeslaDemo from "../../public/images/TeslaDemo.png"
import FyloDemo from "../assets/Fylodemo.png"
import RatingAppDemo from "../../public/images/RatingAppDemo.png"

// Svg Files
import * as BadgeIcons from "../utils/svgComponents.jsx"

export default function Portfolio() {

    // Badges Collection
    const badgesProjectTesla = [
        {
            id: 1,
            name: "JavaScript",
            svg: BadgeIcons.svgJavascript,
            backgroundColor: "yellow",
        },
        {
            id: 2,
            name: "React",
            svg: BadgeIcons.svgReact,
            backgroundColor: "skyblue",
        },
        {
            id: 3,
            name: "Tailwind",
            svg: BadgeIcons.svgTailwind,
            backgroundColor: "green",
        },
    ]

    const badgesProjectIp = [
        {
            id: 1,
            name: "HTML",
            svg: BadgeIcons.svgHTML,
            backgroundColor: "orange",
        },
        {
            id: 2,
            name: "CSS",
            svg: BadgeIcons.svgCSS,
            backgroundColor: "blue",
        },
        {
            id: 3,
            name: "JavaScript",
            svg: BadgeIcons.svgJavascript,
            backgroundColor: "yellow",
        },
        {
            id: 4,
            name: "SCSS",
            svg: BadgeIcons.svgSCSS,
            backgroundColor: "#7d0082"
        }
    ];

    const badgesProjectFylo = [
        {
            id: 1,
            name: "HTML",
            svg: BadgeIcons.svgHTML,
            backgroundColor: "orange",
        },
        {
            id: 2,
            name: "CSS",
            svg: BadgeIcons.svgCSS,
            backgroundColor: "blue",
        },
        {
            id: 3,
            name: "JavaScript",
            svg: BadgeIcons.svgJavascript,
            backgroundColor: "yellow",
        },
        {
            id: 4,
            name: "SCSS",
            svg: BadgeIcons.svgSCSS,
            backgroundColor: "#800080"
        },
        {
            id: 5,
            name: "Bootstrap",
            svg: BadgeIcons.svgBootstrap,
            backgroundColor: "#cc00cc"
        }
    ]

    const badgesProjectRating = [
        {
            id: 1,
            name: "HTML",
            svg: BadgeIcons.svgHTML,
            backgroundColor: "orange",
        },
        {
            id: 2,
            name: "CSS",
            svg: BadgeIcons.svgCSS,
            backgroundColor: "blue",
        },
        {
            id: 3,
            name: "JavaScript",
            svg: BadgeIcons.svgJavascript,
            backgroundColor: "yellow",
        },
    ];

    return (
        <>
            <NavBar />
            <main className='slider'>
                <div id='home' className='slider-element'>
                    <Hero />
                </div>
                <div id='aboutMe' className='slider-element'>
                    <AboutMe />
                </div>
                <div id='projects' className='slider-element'>
                    <Projects
                        titled
                        project1={{
                            title: "Tesla Landing Page Clone",
                            description: "This project is a clone of the Tesla website landing page with minor updates and adjustments. It has been developed using React and JavaScript to recreate all the basic functionalities and styles from the original site.",          
                            badges: badgesProjectTesla ,
                            imageSrc: TeslaDemo ,
                            repoLink: "https://github.com/Nana1423/LandingPage_Tesla",
                            demoLink: "https://landing-page-tesla.vercel.app/"
                        }}
                        project2={{
                            title: "IP Address Tracker",
                            description: "Shows your current location in a map by providing your IP, using the IP Geolocation API and Leadflet to generate a map.",          
                            badges: badgesProjectIp ,
                            imageSrc: IpDemo ,
                            repoLink: "https://github.com/Nana1423/IP-Address-Tracker",
                            demoLink: "https://ip-address-tracker-gamma-khaki.vercel.app/"
                        }}
                    />
                </div>
                <div className='slider-element slider-responsive'>
                    <Projects
                        project1={{
                            title: "IP Address Tracker",
                            description: "Shows your current location in a map by providing your IP, using the IP Geolocation API and Leadflet to generate a map.",          
                            badges: badgesProjectIp ,
                            imageSrc: IpDemo ,
                            repoLink: "https://github.com/Nana1423/IP-Address-Tracker",
                            demoLink: "https://ip-address-tracker-gamma-khaki.vercel.app/"
                        }}
                    />
                </div>
                <div className='slider-element'>
                    <Projects
                        project1={{
                            title: "Fylo - Landing Page",
                            description: "Fylo Landing Page is a sleek and intuitive web application designed to showcase the power of secure and centralized file storage. The primary objective of the landing page is to entice visitors with the promise of simplicity and convenience in managing their most important files.",          
                            badges: badgesProjectFylo ,
                            imageSrc: FyloDemo ,
                            repoLink: "https://github.com/Nana1423/LandingPage-Fylo",
                            demoLink: "https://fylo-landing-page-pink.vercel.app/"
                        }}
                        project2={{
                            title: "Rating App Feature",
                            description: "This project aims to create an interactive rating app. The goal is to allow users to select and submit a number rating, display a Thank you card state after submitting a rating, and show hover and focus states for all interactive elements on the page",          
                            badges: badgesProjectRating ,
                            imageSrc: RatingAppDemo ,
                            repoLink: "https://github.com/Nana1423/RatingApp",
                            demoLink: "https://rating-app-teal.vercel.app/"
                        }}
                    />
                </div>
                <div className='slider-element slider-responsive'>
                    <Projects
                        project1={{
                            title: "Rating App Feature",
                            description: "This project aims to create an interactive rating app. The goal is to allow users to select and submit a number rating, display a Thank you card state after submitting a rating, and show hover and focus states for all interactive elements on the page",          
                            badges: badgesProjectRating ,
                            imageSrc: RatingAppDemo ,
                            repoLink: "https://github.com/Nana1423/RatingApp",
                            demoLink: "https://rating-app-teal.vercel.app/"
                        }}
                    />
                </div>
                <div id='contactMe' className='slider-element slider-footer'>
                    <Footer/>
                </div>
            </main>
        </>
    )
}

