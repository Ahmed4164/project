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
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding-inline: 6%;
  @media (max-width: 840px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 540px) {
    margin-top: 5rem;
`;
const ContainerLeft = styled.div`
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
  padding-inline-start: 10rem;
  position: relative;
  display: flex;
  padding-block: 12rem;
  flex-direction: column;
  @media (max-width: 840px) {
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
    position: absolute;
    bottom: 17rem;
    @media (max-width: 1200px) {
      bottom: 0;
    }
  }
  p {
    font-size: 4rem;
    font-weight: 700;
  }
  .quote {
    h4 {
      font-size: 2rem;
      font-weight: 400;
    }
  }

  .para {
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
