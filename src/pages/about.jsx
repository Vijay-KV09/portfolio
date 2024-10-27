import "../pages/about.css"
import html from "../asserts/html.png";
import css from "../asserts/css.png";
import js from "../asserts/Javascript.png";
import mysql from "../asserts/mysql.png";
import mongodb from "../asserts/mongo-db.png";
import docker from "../asserts/docker.png";
import github from "../asserts/github.png";
import ansible from "../asserts/ansible.jpeg";
import aws from "../asserts/aws.jpeg";
import git from "../asserts/git.png";
import linux from "../asserts/linux.jpeg";
import python from "../asserts/python.png";
import Navbar from "../components/navbar";

const About = () => {
    return (
        <>
        <Navbar/>
        <div className="about">
            <div className="me">
                <h1>About Me</h1>
                <p>
                My technical expertise spans multiple areas, including full-stack development, DevOps, and data analysis, giving me a strong foundation in both software and data engineering. I have developed projects ranging from an employee management CRUD application to a YouTube trend analysis data pipeline and am currently building a microservices-based payment gateway and an authentication and authorization web application.
                </p>
                <p>
                Currently in my fourth year of pursuing a Bachelor’s degree in Computer Science and Engineering with a specialization in Big Data, my academic journey has provided a strong foundation in both theoretical and practical aspects of software engineering, data analysis, and systems architecture. This background has allowed me to gain proficiency in essential programming languages, data engineering, and DevOps tools, which I’ve applied across various personal and academic projects.
                </p>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <div className="skillset">
                    <div>
                        C/C++
                    </div>
                    <div>
                        HTML
                    </div>
                    <div>
                        CSS
                    </div>
                    <div>
                        React Js
                    </div>
                    <div>
                        JavaScript
                    </div>
                    <div>
                        Java
                    </div>
                    <div>
                        TypeScript
                    </div>
                    <div>
                        Python
                    </div>
                    <div>
                        Express.js
                    </div>
                    <div>
                        Node.js
                    </div>
                    <div>
                        SQL
                    </div>
                    <div>
                        MySQL
                    </div>
                    <div>
                        PostgreSQL
                    </div>
                    <div>
                        Git & GitHub
                    </div>
                    <div>
                        Firebase
                    </div>
                    <div>
                        AWS
                    </div>
                    <div>
                        Docker
                    </div>
                    <div>
                        Tailwind CSS
                    </div>
                </div>
            </div>
        </div>
    </>
    )
};

export default About