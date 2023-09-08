import React from "react";
import styled from "styled-components";
import Destination from "./Destination";
import TropicalAdventure from "./TropicalAdventure";
import Discounts from "./Discounts";
import Booknow from "./Booknow";
import Testimonials from "./Testimonials";
import ProfileImage from "../assets/Group 171.svg";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <>
      <Section>
        <ContainerLeft className="left">
          <div className="quote">
            <h4>Discover the beauty of the tropics</h4>
          </div>
          <div>
            <h1>Tropical Destinations</h1>
          </div>
          <div>
            <h2>For Student</h2>
          </div>
          <div className="para">
            <h5>
              Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
              bibendum integer rutrum nisi. A nec nisl vitae
            </h5>
          </div>
          <div className="buttonContainer">
            <Buttons name="sign in" />
          </div>
        </ContainerLeft>
        <ContainerRight className="right">
          <img src={ProfileImage} />
        </ContainerRight>
      </Section>
      <TropicalAdventure />
      <Destination />
      <Discounts />
      <Booknow />
      <Testimonials />
    </>
  );
};
const Section = styled.div`
  padding-inline: 6%;
  background-color: ${({ theme }) => theme.colors.hero_background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;
const ContainerLeft = styled.div`
  width: 63rem;
  height: 52rem;
  position: relative;
  @media (max-width: 1200px) {
    height: 62rem;
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 892px) {
    width: 53rem;
    height: 62rem;
    font-size: 2.5rem;
  }
  @media (max-width: 768px) {
    width: 53rem;
    height: 52rem;
    font-size: 2.5rem;
  }
  @media (max-width: 540px) {
    width: 53rem;
    height: 55rem;
  }
  @media (max-width: 492px) {
    h1{
      font-size: 6rem;
    }
    h2{
      font-size: 4rem;
    }
    h4{
    }
    h5{
    }
  }
  @media (max-width: 375px) {
    width: 95%;
    height: 60rem;
    h1{
      font-size: 5rem;
    }
    h2{
      font-size: 4rem;
    }
    h4{
    }
    h5{
    }
  }

  h5 {
    color: ${({ theme }) => theme.colors.txt_light};
  }
  .buttonContainer {
    /* border: 2px solid red; */
    position: absolute;
    bottom: 0;
  }
  .quote {
    /* border: 2px solid red; */
    padding-block: 1rem;
    /* position: absolute; */
    /* bottom: 0; */
    h4 {
      font-size: 2rem;
      font-weight: 400;
    }
  }
  .para {
    /* border: 2px solid red; */
    padding-block: 5rem;
    /* @media (max-width: 768px) {
    padding-block: 3rem;
  } */
    h5 {
      font-size: 1.6rem;
      font-weight: 400;
    }
  }
`;
const ContainerRight = styled.div`
  /* border: 2px solid red; */
  /* width: 50%; */
  img {
    /* width: 50rem; */
    /* width: 50%; */
    width: 54rem;
    height: 62rem;
    /* height: 50rem; */
    /* border: 2px solid blue; */
    /* top: -3rem; */
    @media (max-width: 1200px) {
      width: 44rem;
      /* border: 2px solid red; */
      /* height: 52rem; */
    }
    @media (max-width: 768px) {
      /* border: 2px solid red; */
      width: 34rem;
    
    @media (max-width: 992px) {
      /* border: 2px solid red; */
      /* width: 30rem; */
    }
    @media (max-width: 892px) {
      /* border: 2px solid red; */
      width: 28rem;
    }
    @media (max-width: 540px) {
      /* border: 2px solid red; */
      width: 28rem;
      height: 32rem;
    }
  }
`;

export default Hero;
