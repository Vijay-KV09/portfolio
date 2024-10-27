import "./project.css";
import project1 from "../asserts/project1.png";
import project2 from "../asserts/project2.jpeg";
import Navbar from "../components/navbar";
const Project = () => {

    const call_me = (para) => {
        if(para === 0){
            window.open("https://github.com/Vijay-KV09/Random-Quote-Gen","_blank");
        }
        else if(para === 1){
            window.open("https://github.com/Vijay-KV09/CRUD_Application","_blank");
        }
        else if(para === 2){
            window.open("https://github.com/Vijay-KV09/social-media-post","_blank");
        }
        else if(para === 3){
            window.open("https://github.com/Vijay-KV09/Docker","_blank");
        }
    }

    return (
        <>
        <Navbar/>
        <div className="mains">
            <div className="project1">
                <div className="img">
                    <img src={project1} alt="n found"/>
                </div>
                <span>Random Quote Generator</span>
                <button onClick={() => call_me(0)}>View Souce Code</button>
            </div>
            <div className="project2">
                <div className="img">
                     <img src={project2} alt="n found"/>
                </div>
                <span>CRUD Application</span>
                <button onClick={() => call_me(1)}>View Souce Code</button>
            </div>
            <div className="project2">
                <div className="img">
                     <img src={project1} alt="n found"/>
                </div>
                <span>Social Media Application</span>
                <button onClick={() => call_me(2)}>View Souce Code</button>
            </div>
            <div className="project1">
                <div className="img">
                     <img src={project2} alt="n found"/>
                </div>
                <span>Docker Application</span>
                <button onClick={() => call_me(3)}>View Souce Code</button>
            </div>
        </div>
    </>
    )
}


export default Project;