import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import character from "../../assets/char.png";
import scrollDown from "../../assets/scroll-down.svg";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const textEffect = (event) => {
    let iteration = 0;
    let interval = null;
    const letters = "abcdefghijklmnopqrstuvwxyz!";
    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h3>
              Hello,{" "}
              <span data-value='Everyone!' onMouseOver={textEffect}>
                Everybody
              </span>
            </h3>
            <h1>
              I'm <span className='name'>Shusan Adhikari.</span>
            </h1>

            <h5 className="typing-text">
              <Typewriter
                options={{
                  strings: ["Web Developer", "Website Designer", "Graphics Designer", "Frontend Developer"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 1500,
                  wrapperClassName: "highlight-span", 
                }}
              />
            </h5>



            {/* <p>Just an introvert trying to code beautiful things.</p> */}
          </HeroLeft>
          <HeroRight>
            <Image src={character} alt='Character hero' />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to='projects'>
          <ScrollLink>
            <h3>Scroll Down</h3>
            <img src={scrollDown} alt='scroll-down' />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
