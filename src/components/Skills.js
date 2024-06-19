// Skills.js

import React from 'react';
import './Skills.css'; // Import your CSS for styling
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Skill_data, Frontend_skill, Backend_skill, Full_stack, Other_skill } from '../data/SkillData'; // Adjust path based on your actual structure

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 10
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 10
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                className="owl-carousel owl-theme skill-slider"
                autoPlay={true} // Enable auto play
                autoPlaySpeed={100} // Time in milliseconds between auto play transitions
              >
                {/* Render Skill_data */}
                {Skill_data.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={process.env.PUBLIC_URL + skill.Image} alt={skill.skill_name} />
                    <h5>{skill.skill_name}</h5>
                  </div>
                ))}
                {/* Render Frontend_skill */}
                {Frontend_skill.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={process.env.PUBLIC_URL + skill.Image} alt={skill.skill_name} />
                    <h5>{skill.skill_name}</h5>
                  </div>
                ))}
                {/* Render Backend_skill */}
                {Backend_skill.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={process.env.PUBLIC_URL + skill.Image} alt={skill.skill_name} />
                    <h5>{skill.skill_name}</h5>
                  </div>
                ))}
                {/* Render Full_stack */}
                {Full_stack.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={process.env.PUBLIC_URL + skill.Image} alt={skill.skill_name} />
                    <h5>{skill.skill_name}</h5>
                  </div>
                ))}
                {/* Render Other_skill */}
                {Other_skill.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={process.env.PUBLIC_URL + skill.Image} alt={skill.skill_name} />
                    <h5>{skill.skill_name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
