import Badge from "./Badge"
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

export default function ProjectCard({ title, description, badges, imageSrc, repoLink, demoLink, responsive }) {
    return (
        <div className={responsive ? "project responsive-projectCard" : "project"} >
            <main>
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
                <ul>
                    {badges.map(badge => (
                        <li key={badge.id}>
                            <Badge
                                name={badge.name}
                                svg={badge.svg}
                            />
                        </li>
                    ))}
                </ul>
            </main>
            <aside>
                <img className="project-image" src={imageSrc} alt="Project Image" />
                <div className="div-buttons">
                    <Button target="_blank" href={repoLink} className="button-project" variant="outlined" startIcon={<GitHubIcon />}>
                        Check Code
                    </Button>
                    <Button target="_blank" href={demoLink} className="button-project" variant="outlined" startIcon={<LanguageIcon />}>
                        Demo
                    </Button>
                </div>
            </aside>
        </div>
    )
}