import React from 'react';
import program from '../../assets/img/skills/programming.png';
import resume from '../../assets/resume/ChunYu-Chang.pdf';


function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <img src={program} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        <h1>Web Developer</h1>
        <p>Frontend: React | HTML | CSS | JavaScript | </p>
        <p>Backend: Node | Express | MySQL | Git | NoSQL |</p>
      </div>
      <div>
        <a href = {resume} target='_blank' rel="noreferrer">Download my resume</a>

      </div>
    </section>
  );
}

export default About;
