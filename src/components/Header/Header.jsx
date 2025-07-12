import React from "react";
import logo from "../../assets/logo.png";
import resume from "../../assets/Resume.pdf";
import {
  NavBackground,
  NavBox,
  Logo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
} from "./HeaderElements";

const Header = ({ toggle }) => {
  return (
    <NavBackground>
      <NavBox>
        <Logo to='/'>
          <img src={logo} alt='logo' />
        </Logo>
        <NavMenu>
          <NavLink className='menu-item' to='projects' smooth={true}>
            Projects
          </NavLink>
          <NavLink className='menu-item' to='about' smooth={true}>
            About
          </NavLink>
          <NavLink className='menu-item' to='contact' smooth={true}>
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a
            className='btn resume-btn'
            href={resume}
            target='_blank'
            rel='noopener noreferrer'
          >
            MY Resume
          </a>
        </NavBtn>
        <Bars onClick={toggle} />
      </NavBox>
    </NavBackground>
  );
};

export default Header;
