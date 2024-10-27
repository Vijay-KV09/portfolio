import "../style/main.css"
import Footer from "./footer";
import Navbar from "./navbar";

const Main = () => {
    return (
        <> 
        <Navbar/>
        <div className="main">
            <h2>Hey! I'm Vijay {"\u{1F64C}"}</h2>
            <p>
                Proficient Computer Science and Engineering student with strong expertise in Full Stack and MERN development, complemented by a solid foundation in DevOps. Demonstrates leadership, professionalism, and effective teamwork, aligning well with advanced roles focused on data-driven, scalable solutions.
            </p>
        </div> 
        <Footer/>
        </>
    )
};

export default Main;