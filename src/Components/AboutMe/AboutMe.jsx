import "./AboutMe.css"

export default function AboutMe() {
    return (
        <>
            <section className="aboutMe_section">

                <div className="text-div">
                    <h1>About Me</h1>
                    <p>My name is <span className="name">Emanuel Leite</span>, and I am a passionate web software developer. I'm currently an university student in Nicaragua, with previous studies in Brazil, where I continue to expand my knowledge. My primary focus lies in front-end development, and I enjoy working with technologies such as <b>JavaScript</b>, <b>React</b>, and <b>Tailwind CSS</b> to create captivating web experiences.</p>
                    <p>I am constantly on the lookout for opportunities to learn and grow professionally, as I believe the tech industry is an ever-evolving field that offers a world of possibilities for innovation and creativity.</p>
                </div>

                <div className="skills-div">
                    <div className="carrousel-div"></div>
                </div>
            </section>

        </>

    )
}