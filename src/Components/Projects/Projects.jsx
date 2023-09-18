import "./Projects.css"

export default function Projects() {
    return (
        <section className="projects-section">
            <h1>Relevant Projects</h1>

            <div className="projects-container">
                <div className="project">
                    <main>
                        <h3>Project Name</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptas architecto ad, ipsum facere accusantium consequuntur eaque accusamus ea similique alias excepturi quia voluptate corporis quam officia distinctio modi ullam.</p>
                        <div className="div-buttons">
                            <button>Check Code</button>
                            <button>Live Demo</button>
                        </div>
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Tailwind</li>
                        </ul>
                    </main>
                    <aside>
                        <img src="/images/mysql-logo.png" alt="Project Image" />
                    </aside>
                </div>
            </div>
        </section>
    )
}