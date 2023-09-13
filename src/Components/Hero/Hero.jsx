import "./Hero.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-icons">
                <a target="_blank" href=""><svg className="cv" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 128 160" x="0px" y="0px"><path d="M104.83,113.74V14.26c0-1.24-1.01-2.26-2.26-2.26H52.04V116h50.54c1.24,0,2.26-1.01,2.26-2.26ZM78.43,18.99c15.02,0,21.72,19.07,9.82,28.43-.11,.12-.25,.22-.4,.3-5.63,4.15-13.2,4.15-18.83,0-.15-.08-.29-.18-.41-.31-11.88-9.35-5.23-28.43,9.82-28.43Zm17.05,88.02h-20.28c-1.98,0-1.98-3,0-3h20.28c1.98,0,1.98,3,0,3Zm0-12.15H59.96c-1.98,0-1.98-3,0-3h35.52c1.98,0,1.98,3,0,3Zm0-10.94H59.96c-1.98,0-1.98-3,0-3h35.52c1.98,0,1.98,3,0,3Zm0-10.94H59.96c-1.98,0-1.98-3,0-3h35.52c1.98,0,1.98,3,0,3Zm0-10.94H59.96c-1.98,0-1.98-3,0-3h35.52c1.98,0,1.98,3,0,3Z" /><path d="M25.43,116h23.61V12H25.43c-1.24,0-2.26,1.01-2.26,2.26V113.74c0,1.24,1.01,2.26,2.26,2.26Zm3.08-94.37h15.19c1.98,0,1.98,3,0,3h-15.19c-1.98,0-1.98-3,0-3Zm0,8.15h15.19c1.98,0,1.98,3,0,3h-15.19c-1.98,0-1.98-3,0-3Zm0,8.15h15.19c1.98,0,1.98,3,0,3h-15.19c-1.98,0-1.98-3,0-3Zm0,8.15h15.19c1.98,0,1.98,3,0,3h-15.19c-1.98,0-1.98-3,0-3Zm3.42,22.11h8.34c2.71,0,4.92,2.22,4.92,4.94s-2.21,4.94-4.92,4.94h-8.34c-2.71,0-4.92-2.21-4.92-4.94s2.21-4.94,4.92-4.94Zm0,15.2h8.34c2.71,0,4.92,2.21,4.92,4.94s-2.21,4.94-4.92,4.94h-8.34c-2.71,0-4.92-2.22-4.92-4.94s2.21-4.94,4.92-4.94Zm0,15.2h8.34c2.71,0,4.92,2.21,4.92,4.94s-2.21,4.94-4.92,4.94h-8.34c-2.71,0-4.92-2.22-4.92-4.94s2.21-4.94,4.92-4.94Z" /><path d="M31.93,105.47h8.34c1.06,0,1.92-.87,1.92-1.94s-.86-1.94-1.92-1.94h-8.34c-1.06,0-1.92,.87-1.92,1.94s.86,1.94,1.92,1.94Z" /><path d="M31.93,90.27h8.34c1.06,0,1.92-.87,1.92-1.94s-.86-1.94-1.92-1.94h-8.34c-1.06,0-1.92,.87-1.92,1.94s.86,1.94,1.92,1.94Z" /><path d="M31.93,75.07h8.34c1.06,0,1.92-.87,1.92-1.94s-.86-1.94-1.92-1.94h-8.34c-1.06,0-1.92,.87-1.92,1.94s.86,1.94,1.92,1.94Z" /><path d="M73.66,37.63c-5-4.42-1.85-12.68,4.78-12.68s9.78,8.25,4.78,12.68c2.3,1.21,4.07,3.28,4.91,5.8,7.29-8.28,1.47-21.44-9.69-21.44s-16.98,13.16-9.69,21.44c.84-2.52,2.62-4.59,4.91-5.8Z" /><path d="M82.67,32.2c0-2.34-1.9-4.25-4.23-4.25s-4.23,1.91-4.23,4.25,1.9,4.25,4.23,4.25,4.23-1.91,4.23-4.25Z" /><path d="M78.43,39.45c-3.64,0-6.64,2.67-7.15,6.22,4.33,2.89,9.97,2.89,14.3,0-.51-3.54-3.51-6.22-7.15-6.22Z" /></svg></a>
                <a target="_blank" href="https://github.com/Nana1423"><GitHubIcon className="icon" /></a>
                <a target="_blank" href="https://www.linkedin.com/in/emanuel-leite-8a4005251/"><LinkedInIcon className="icon" /></a>
                <a target="_blank" href=""><EmailIcon className="icon" /></a>
            </div>
            <main>
                <div className="hero-text">
                    <h1>Emanuel <br /> Leite</h1>
                    <h3>System Engineer & <br /> Front-End Developer</h3>
                    <p>I am a Front-End developer with proficiency in React, JavaScript, and Tailwind CSS, currently pursuing my System Engineering degree. As I embark on my career journey, I bring with me a solid foundation in time management and strong logical problem-solving abilities.</p>
                </div>
                <aside className="hero-image">
                    <h1>El dibujo de la Fer XDD</h1>
                </aside>
            </main>
        </section>
    )
}