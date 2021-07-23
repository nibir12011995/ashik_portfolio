import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch...</motion.h2>
        </Hide>
      </Title>
      <div>
        {/* <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us A Message</h2>
          </Social>
        </Hide> */}
        <Hide>
          <Social variants={titleAnim}>
            <Circle />

            <h2>Send an email at &nbsp; <a href={"mailto:ashik.sculptor@gmail.com"}>ashik.sculptor@gmail.com</a></h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />

            <h2>FACEBOOK: &nbsp; <a href={"https://www.facebook.com/ashik.sculptor"}>facebook.com/ashik.sculptor</a></h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media (max-width: 800px) {
    width: 1.5rem;
    height: 1.3rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    color: #fe4f4e;
    font-style: italic;
  }

  
`;

export default ContactUs;
