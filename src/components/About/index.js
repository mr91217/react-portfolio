import React from 'react';
import icon from "../../assets/img/skills/programming.png"


function About() {
    return(
        <section className="my-5">
            <div className="container">
            <div className="row d-flex justify-content-center align-items-center">
                <h1 className="display-4">About me - </h1>
                <a className="btn btn-outline-info" href="./assets/resume_kuanyi_lee.pdf" target="_blank">Resume</a>
            </div>
            <hr />
            <div className="row-hl d-flex justify-content-around text-center">
                <div className="p-3 item-hl">
                <img className="icon-skills" src={icon} alt="programming-icon" />
                <h3 className="sub-title">Web Development</h3>
                <p>Frontend: React | Angular | HTML | CSS | JavaScript | TypeScript</p>
                <p>Backend: Java | SpringBoot | Maven | Node | Express | MySQL | Git | Azure</p>
                </div>
                
            </div>
            </div>
            
        </section>
    );
}


export default About;