import React from "react";
import styled from "styled-components";
import { About } from "../styles";


import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery3.jpg";
import gallery4 from "../img/gallery4.jpg";
import gallery5 from "../img/gallery5.jpg";
import gallery6 from "../img/gallery6.jpg";
import gallery7 from "../img/gallery7.jpg";
import gallery8 from "../img/gallery8.jpg";
import gallery9 from "../img/gallery9.jpg";
import gallery10 from "../img/gallery10.jpg";
import gallery11 from "../img/gallery11.jpg";
import gallery12 from "../img/gallery12.jpg";
import gallery13 from "../img/gallery13.jpg";


const LifeSection = () => {
    return (
        <Life>
            <Content>
                <h2>
                    My <span>Story</span>
                </h2>
                <p>
                    I'm Aminul Islam Ashik. <br></br><br></br>
                    I was Born in 1988,Madaripur, Bangladesh. In 2010, I completed
                    BFA in 2012 and MFA in Sculpture from Faculty of Fine Art, University of Dhaka. In the
                    same year, I received the BEST AWARD in Sculpture in 18th Young Artists Exhibition, Bangladesh
                    Shilpokola Academy. I have held several group exhibitions nationally and internationally.
                    I participated in Britto Students Residency Program 2013 in Nepal and the SANDWICH
                    residency Program 2015 in Japan. My practice includes Sculpture, Installation, Object making, and
                    new media art. The focal point of my artwork is the sense of humans, their mentality, and the
                    environment.
                    <br></br><br></br>Focusing on the current situation of society is the main intent of my work. At present, I am
                    a member of the Britto Arts Trust.
            </p>
            </Content>
            <Gallery>
                <h2>Life <span>Gallery</span></h2>
                <Imgs>
                    <img src={gallery1}></img>
                    <img src={gallery4}></img>
                    <img src={gallery7}></img>
                    <img src={gallery2}></img>
                    <img src={gallery3}></img>
                    <img src={gallery6}></img>
                    <img src={gallery8}></img>
                    <img src={gallery9}></img>
                    <img src={gallery13}></img>
                    {/* <img src={gallery11}></img> */}
                    <img src={gallery12}></img>
                    <img src={gallery10}></img>
                    <img src={gallery5}></img>
                </Imgs>

            </Gallery>
        </Life>


    )
}

const Imgs = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    img {
        width: 30%;
        margin-bottom: 3rem;
    }
    
    @media screen and (max-width: 800px) {
        img {
            width:40%;
            margin-bottom: 3rem;
        }
        padding-right: 1rem;
    }

`

const Gallery = styled.div`
    width: 100%;
    margin: 10rem 0 0 0;
    border-right: 1px solid #4687ff;

`

const Life = styled(About)`
    h2 {
        padding-bottom: 3rem;
    }
    @media (max-width: 1200px) {
        text-align: left;
    }
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

`
const Content = styled.div`
    display: block;
    padding-left: 2rem;
    border-left: 1px solid #4687ff;
`

export default LifeSection;
