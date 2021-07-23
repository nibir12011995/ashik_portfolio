import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Reach You?">
          <div className="answer">
            <p>Simply go to the contact section...</p>
            <p>
              Generally everyone contacts me via phone. But it get really hard to receive all those phone calls while working. So I prefer emails. Please send your query in emails and I will get back to you ASAP.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p></p>
            <p>

            </p>
          </div>
        </Toggle>
        <Toggle title="Diferrent Techniques...">
          <div className="answer">
            <p></p>
            <p>

            </p>
          </div>
        </Toggle>
        <Toggle title="What areas do you usually work on?">
          <div className="answer">
            <p></p>
            <p>

            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
