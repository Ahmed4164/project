import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import Img from "../assets/taskweb/Mask group.svg";

const Discounts = () => {
  return (
    <Section>
      <ContainerRight>
        <div className="quote">
          <h4>Get 20% off for student</h4>
        </div>
        <div>
          <p>Student discounts available.</p>
        </div>
        <div>
          <p className="sub">Get ready for some fun in the sun!</p>
        </div>
        <div className="para">
          {/* <h5>Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum integer rutrum nisi. A nec nisl vitae</h5> */}
          <li>Lorem ipsum dolor, sit amet</li>
          <li>Lorem ipsum dolor, sit amet</li>
          <li>consectetur adipisicing elit. Dducimus?</li>
          <li> Magnam at culpa id aperiam! quisquam!</li>
          <li>icta consequuntur doloremque quaerat</li>
        </div>
        <div className="buttonContainer">
          <Buttons name="Explore More" />
        </div>
      </ContainerRight>
      <ContainerLeft>
        <img src={Img} alt="" srcset="" />
      </ContainerLeft>
    </Section>
  );
};
const Section = styled.div`
  background-color: #fff;
  /* height: 100vh; */
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding-inline: 6%;
  /* align-items: center; */
  /* @media (max-width: 768px) {
    flex-direction: column;
  } */
  @media (max-width: 840px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 540px) {
    margin-top: 5rem;
  }
`;
const ContainerLeft = styled.div`
  /* width: 60vw; */
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8rem 0 8rem 8rem;
  img {
    height: 48rem;
  }
  @media (max-width: 840px) {
    padding: 0;
  }
`;
const ContainerRight = styled.div`
  /* width: 63rem; */
  /* height: 52rem; */
  padding-inline-start: 10rem;
  /* border: 2px solid red; */
  position: relative;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  padding-block: 12rem;
  flex-direction: column;
  @media (max-width: 840px) {
    /* border: 2px solid red; */
    padding-inline: 4rem;
    margin-bottom: 4rem;
    padding-block: 6rem;
  }
  
  h5 {
    color: ${({ theme }) => theme.colors.txt_light};
    font-size: 2rem;
  }
  .sub {
    font-size: 2.5rem;
  }
  .buttonContainer {
    /* border: 2px solid red; */
    position: absolute;
    /* top: 10rem; */
    bottom: 17rem;
    /* @media (max-width: 768px) {
      bottom: -10rem;
      } */
    @media (max-width: 1200px) {
      bottom: 0;
      /* height: 52rem; */
    }
  }
  p {
    font-size: 4rem;
    font-weight: 700;
  }
  .quote {
    /* border: 2px solid red; */
    /* padding-block: 1rem; */
    /* position: absolute; */
    /* bottom: 0; */
    h4 {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .para {
    /* border: 2px solid red; */
    /* padding-block: 5rem; */
    h5 {
      font-size: 1.6rem;
      font-weight: 400;
    }
    li {
      list-style: disc;
      font-size: 1.6rem;
      font-weight: 400;
      padding-block: 0.5rem;
    }
  }
`;

export default Discounts;
