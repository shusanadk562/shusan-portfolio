import React from "react";
import character from "../../assets/char.png";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";

function About() {
  return (
    <ContactWrapper id='about'>
      <div className='Container'>
        <div className='SectionTitle'>About Me</div>
        <div className='BigCard'>
          <Image src={character} alt='Character Hero' />
          <div className='AboutBio'>
             Hi, I'm<strong>Shusan Adhikari.</strong> a passionate web developer with a strong focus on HTML, CSS, JavaScript, React and Tailwind CSS . Over time, I’ve gained solid experience in building responsive and user-friendly websites that work well on all devices. I love coding and am always eager to learn new things and take on challenges. I enjoy working on creative and innovative projects that push the limits of what's possible with technology.
            necessitatibus numquam.
          </div>
          <div className='AboutBio tagline2'>
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className='tech'>
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
