import "./Projects.css"
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

// Components
import ProjectCard from "./Project/ProjectCard";

// Images
import IpDemo from "../../../public/images/IpDemo.png"
import TeslaDemo from "../../../public/images/TeslaDemo.png"

// Svg Files
import * as BadgeIcons from "../../utils/svgComponents.jsx"


export default function Projects({ titled, project1, project2 }) {

    // Badges Collection
    const badgesProject1 = [
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

    const badgesProject2 = [
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


    return (
        <section className="projects-section">
            {titled && <h1>Relevant Projects</h1>}
            <div className="projects-container">

                <ProjectCard
                    title= {project1.title}
                    description= {project1.description}          
                    badges= {project1.badges}
                    imageSrc= {project1.imageSrc}
                    repoLink= {project1.repoLink}
                    demoLink= {project1.demoLink}
                />

                {project2 && <hr />}

                {project2 && <ProjectCard
                    responsive
                    title= {project2.title}
                    description= {project2.description}          
                    badges= {project2.badges}
                    imageSrc= {project2.imageSrc}
                    repoLink= {project2.repoLink}
                    demoLink= {project2.demoLink}
                />}

            </div>
        </section>
    )
}