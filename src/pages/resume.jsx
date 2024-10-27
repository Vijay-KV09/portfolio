import "../pages/resume.css"
import Image from "../asserts/resume.png";
import Navbar from "../components/navbar";

const Resume = () => {

    const resume_download = (exp) => {
        if(!exp)
        {
            window.open("/resume1.pdf",'_blank');
        }
        else{
            window.open("/professional_resume.pdf",'_blank')
        }
    }

    return (
        <>
        <Navbar/>
        <div className="resume">
            <div className="personal">
                <img src={Image} alt=""/>
                <button onClick={() => resume_download(0)}>Personal Resume</button>
            </div>
            <div className="personal">
                <img src={Image} alt=""/>
                <button onClick={() => resume_download(1)}>Professional Resume</button>
            </div>
        </div>
        </>
    )
};

export default Resume;