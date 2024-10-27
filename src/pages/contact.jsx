import React, { useState } from "react";
import "./contact.css";
import { EmailOutlined } from "@mui/icons-material";
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import Navbar from "../components/navbar";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const callup = (e) => {
        if (!name) {
            alert("Please enter your name");
            return;
        }
        if (!email) {
            alert("Please enter your email");
            return;
        }
        if (!message) {
            alert("Please enter your message");
            return;
        }

        alert("Details Sent to Web Owner");
    };

    return (
        <>
        <Navbar/>
        <div className="contact">
            <div className="getint">
                <div>
                    <span>Get in Touch</span>
                </div>
                <form onSubmit={callup}>
                    <input
                        autoFocus
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <textarea
                        placeholder="Message"
                        style={{ width: "300px", height: "50px" }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className="contactus">
                <div>
                    <span>Contact</span>
                </div>
                <div>
                    <EmailOutlined />
                    <a href="mailto:vkvpenmatsa803@gmail.com">vkvpenmatsa803@gmail.com</a>
                </div>
                <div>
                    <ContactPhoneIcon />
                    <a href="tel:+916305953803">+91 6305953803</a>
                </div>
            </div>
        </div>
    </>
    );
};

export default Contact;
