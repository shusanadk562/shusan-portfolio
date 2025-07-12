import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2rem;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(17, 255, 0);
    }
  }

  @media screen and (max-width: 968px) {
    a {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className='item'>
          <a
            href='https://www.facebook.com/adhikari.sushan.9/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook />
          </a>
        </li>
        <li className='item'>
          <a
            href='https://github.com/shusanadk562/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
        </li>
        <li className='item'>
          <a
            href='https://instagram.com/adhikari.sushan.9/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
