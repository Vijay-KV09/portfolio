import "../style/footer.css"
import React from 'react'
import Image from "../asserts/profile_image.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className="footer">
            <div className="back">
                <img src={Image} alt=""/>
            </div>
            <div className="contacts">
              <a href="https://github.com/Vijay-KV09?tab=repositories"><GitHubIcon style={{
                    width:"50px",
                    height:"50px",
                    marginBottom:"50px",
                }}/></a>
                <a href="https://www.linkedin.com/in/vijay-kumar-varma100/"><LinkedInIcon style={{
                    width:"50px",
                    height:"50px",
                    marginBottom:"50px",
                }}/></a>
                <a href="mailto:vkvpenmatsa803@gmail.com"><EmailIcon style={{
                    width:"50px",
                    height:"50px",
                    marginBottom:"24px",
                }}/></a>
            </div>
        </div>
    )
}




export default Footer;