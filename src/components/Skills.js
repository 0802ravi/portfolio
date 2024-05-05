import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase ,FaJava,FaToolbox} from 'react-icons/fa';

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-container">
        <div className="skill">
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3 className="skill-icon" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaJs className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaReact className="skill-icon" />
          <p>React</p>
        </div>
        <div className="skill">
          <FaNodeJs className="skill-icon" />
          <p>Node.js</p>
        </div>
        <div className="skill">
          <FaDatabase className="skill-icon" />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <FaJava className="skill-icon" />
          <p>Java</p>
        </div>
        <div className="skill">
          <FaToolbox className="skill-icon" />
          <p>Java</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
