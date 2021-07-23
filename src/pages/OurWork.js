import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import two from "../img/2.jpg";
import three from "../img/3.jpg";
import four from "../img/4.jpg";
import five from "../img/5.jpg";
import six from "../img/6.jpg";
import seven from "../img/7.jpg";
import eight from "../img/8.jpg";
import nine from "../img/9.jpg";
import ten from "../img/10.jpg";
import eleven from "../img/11.jpg";
import twelve from "../img/12.jpg";
import thirteen from "../img/13.jpg";
import fourteen from "../img/14.jpg";
import fifteen from "../img/15.jpg";
import sixteen from "../img/16.jpg";
import seventeen from "../img/17.jpg";
import eighteen from "../img/18.jpg";
import nineteen from "../img/19.jpg";
import twenty from "../img/20.jpg";
import twentyone from "../img/21.jpg";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>





      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Face Of Life 59</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/face-of-life-59">
          <img src={three} alt="theracer" />
        </Link>
      </Movie>

      <Movie>
        <motion.h2 variants={fade}>Imagine</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/imagine">
          <Hide>
            <motion.img variants={photoAnim} src={sixteen} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
      >
        <h2>Face Of Life 71</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/face-of-life-71">
          <img src={four} alt="goodtimes" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
      >
        <h2>Power Recycling</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/power-recycling">
          <img src={five} alt="goodtimes" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
      >
        <h2>Power 7,8</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/power-7-8">
          <img src={six} alt="goodtimes" />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
      >
        <h2>Power 9,10,11</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/power-9-10-11">
          <img src={seven} alt="goodtimes" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
      >
        <h2>Power 13</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/power-13">
          <img src={eight} alt="goodtimes" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
      >
        <h2>Brutal Power</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/power-16">
          <img src={nine} alt="goodtimes" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
      >
        <h2>The Last Result</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/last-result">
          <img src={ten} alt="goodtimes" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
      >
        <h2>Dance After 110 Years</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/dance-after-110-years">
          <img src={eleven} alt="goodtimes" />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Face Of Life 03</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/face-of-life-03">
          <Hide>
            <motion.img variants={photoAnim} src={two} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Behind The Scenes</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/behind-the-scenes">
          <Hide>
            <motion.img variants={photoAnim} src={twelve} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Brihatta Home Art Project June-2020</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/brihatta-6-2020">
          <Hide>
            <motion.img variants={photoAnim} src={thirteen} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Brihatta Home Art Project July-2020</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/brihatta-7-2020">
          <Hide>
            <motion.img variants={photoAnim} src={fourteen} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Dance</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/dance">
          <Hide>
            <motion.img variants={photoAnim} src={fifteen} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie>
        <motion.h2 variants={fade}>Brihatta Home Art Project 2020</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/brihatta-2020">
          <Hide>
            <motion.img variants={photoAnim} src={seventeen} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      {/* <Movie>
        <motion.h2 variants={fade}>Puja</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/puja">
          <Hide>
            <motion.img variants={photoAnim} src={eighteen} alt="athlete" />
          </Hide>
        </Link>
      </Movie> */}
      {/* <Movie>
        <motion.h2 variants={fade}>Rongbaaz</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/rongbaaz">
          <Hide>
            <motion.img variants={photoAnim} src={nineteen} alt="athlete" />
          </Hide>
        </Link>
      </Movie> */}
      <Movie>
        <motion.h2 variants={fade}>জাতির জনক</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/father-of-the-nation">
          <Hide>
            <motion.img variants={photoAnim} src={twenty} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>ডিওরমা - নবাব নুসরাত জং এর দরবার-3</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/nusrat-03">
          <Hide>
            <motion.img variants={photoAnim} src={twentyone} alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    h2 {
      font-size: 2.5rem;
    }
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
  }
  @media (max-width: 800px) {
    img {
      object-fit: cover;
      height: 100%;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
