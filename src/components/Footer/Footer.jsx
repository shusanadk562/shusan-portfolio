import React from "react";
import wave from "../../assets/footer_wave.svg";
import styled from "styled-components";

const FooterSection = styled.div`
   width: 100%;
   height: 180px;
   position: relative;
   background-size: 100% 100%;

  span {
    font-size: 1.2rem;
    position: absolute;
    bottom: 3rem;
    left: 5rem;
    color: #11ff00;
  }
`;
function Footer() {
  return (
    <FooterSection>
      <img
        src={wave}
        alt="wave"
        style={{
          position: "absolute",
          bottom: 0,
          width: "60%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <span>Thank You For Visiting! 💚</span>
    </FooterSection>
  );
}

export default Footer;