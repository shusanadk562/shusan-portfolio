import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
function Contact() {
  return (
    <ContactWrapper id='contact'>
      <div className='Container'>
        <div className='SectionTitle'>Get In Touch</div>
        <div className='BigCard'>
          <Email>
            <span>shusanadhikari739@gmail.com</span>
            <a
                className='btn PrimaryBtn'
                href='https://mail.google.com/mail/?view=cm&fs=1&to=Shusanadhikari739@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
            >

              Send Mail
            </a>
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
