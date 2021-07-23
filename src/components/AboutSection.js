import React from "react";
import home5 from "../img/home5.jpg";
import home6 from "../img/home6.png";
import { Link } from "react-router-dom";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hi,<br></br>I'm Aminul Islam</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Ashik</span> .
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide> */}
        </motion.div>
        {/* <motion.p variants={fade}>
          Hi! I'm <span>Aminul Islam Ashik...</span>
        </motion.p> */}
        <motion.p variants={fade}>
          Reach out to me about any Sculpture, Installation, Object making, and new media art or you're simply interested to know more about the colorful adventures of my life.
          <br></br>I
          am always here for you with my team of professionals with amazing skills.
        </motion.p>
        <Link to="/contact">
          <motion.button variants={fade}>Contact Me</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home6} alt="ashik" />
      </Image>
      <Wave />
    </About >
  );
};

//Styled Components

export default AboutSection;
