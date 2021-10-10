import React from 'react';
import reactimg from '../../assets/img/skills/react.png'
import javascript from '../../assets/img/skills/javascript.png'
import html5 from '../../assets/img/skills/html5.png'
import css3 from '../../assets/img/skills/css3.png'
import mysql from '../../assets/img/skills/mysql.png'
import node from '../../assets/img/skills/node.png'
import express from '../../assets/img/skills/express.png'









function Skill() {
  return (
    <section className="my-5">
      <h1 id="skill">Skills</h1>
      <div className="flex-container row-hl d-flex justify-content-around">
      <img src={reactimg} className="my-2" style={{ width: "20%" }} alt="react" />
      <img src={javascript} className="my-2" style={{ width: "20%" }} alt="javascript" />
      <img src={html5} className="my-2" style={{ width: "20%" }} alt="html5" />
      <img src={css3} className="my-2" style={{ width: "20%" }} alt="css3" />
      <img src={mysql} className="my-2" style={{ width: "20%" }} alt="mysql" />
      <img src={node} className="my-2" style={{ width: "20%" }} alt="node" />
      <img src={express} className="my-2" style={{ width: "20%" }} alt="express" />
      <span id="plink"></span>

      </div>

      
    </section>
  );
}

export default Skill;
