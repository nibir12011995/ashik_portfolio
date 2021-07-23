import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home4 from "../img/home4.jpg";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Explore <span>magnificent</span> artworks
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>Peak performance within due time.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>Collaboration of highly skilled professionals.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Masterpiece</h3>
            </div>
            <p>Experience the unique design.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Affordable</h3>
            </div>
            <p>World class artwork but cost-effective.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt="camera" src={home4} />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;

  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }


  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
