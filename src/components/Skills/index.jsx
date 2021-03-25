import "./style.css";

const Skills = () => {
    return (
        <div className="skills">
            <h1>Mitä olen tähän mennessä opiskellut?</h1>
            <div className="content">
                <div>
                    <strong>Kielet</strong>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>Scala</li>
                    <li>Python</li>
                </div>
                <div>
                    <strong>Kirjastot</strong>
                    <li>Bootstrap</li>
                    <li>React.js</li>
                    <li>jQuery</li>
                </div>
                <div>
                    <strong>Työkalut</strong>
                    <li>VSCode</li>
                    <li>Chrome DevTools</li>
                    <li>Git & Github</li>
                    <li>HacknPlan</li>
                    <li>Gimp</li>
                </div>
            </div>
        </div>
    )
}

export default Skills
