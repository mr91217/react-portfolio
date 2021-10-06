import React from 'react';
import program from '../../assets/img/skills/programming.png';



function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
      <img src={program} className="my-2" style={{ width: "20%" }} alt="cover" />
      <div className="my-2">
        
        <p>Frontend: React | HTML | CSS | JavaScript | </p>
        <p>Backend: Java | SpringBoot | Maven | Node | Express | MySQL | Git | Azure</p>
      </div>
    </section>
  );
}

export default About;
