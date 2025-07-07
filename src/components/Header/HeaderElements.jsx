import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const NavBackground = styled.div`
  width: 100%;
  background: transparent; /* Your page background */
  padding: 2rem 0; /* Push navbar down a little */
  display: flex;
  justify-content: center;
`;

export const NavBox = styled.nav`
  background: #255876;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgb(0, 0, 0);
  padding: 1.5rem 2rem;
  width: 90%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled(LinkRouter)`
  img {
    width: 58px;
    height: 68px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  .menu-item + .menu-item {
    margin-left: 7.5rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #11ff00;
  font-size: 1.1rem;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  .btn.resume-btn {
    background: #11ff00;
    color: #000;
    padding: 8px 16px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease-in-out;

    &:hover {
      background: #fff;
      color: #000;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #11ff00;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
