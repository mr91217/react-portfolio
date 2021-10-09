import React from 'react';
// import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import linkin from '../../assets/img/linkedin.png';
import github from '../../assets/img/github.png';
import envelope from '../../assets/img/email.png';
import '../../assets/css/footer.css';



function Footer() {
    return (
        

        <div className="container">
            <div className="row">
                <div className="col text-center py-4">
                    <a href="https://github.com/mr91217" id="profile-link" >
                        <img className="contact-icon"
                        src={github} style={{ width: "10%" }} alt="github_icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/chunyu-chang-9613a920a/" id="linkedin-link" >
                        <img
                        className="contact-icon" src={linkin} style={{ width: "10%" }} alt="linkedin_icon" />
                    </a>
                    <a href="mailto:mr91217@gmail.com?subject=We are looking for a software developer like you!"
                    id="envelope-link">
                    <img className="contact-icon" src={envelope} style={{width:"10%"}} alt="envelope_icon" />
                    </a>
                    <p>Thank you for visiting! Last update: October 2021</p>
                </div>
            </div>
        </div>

       
    );
}

export default Footer;