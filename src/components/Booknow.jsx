import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import Img from "../assets/taskweb/Group 167.svg";
import InputWrapper from "./InputWrapper";
import Counter from "./Counter";

const Booknow = () => {
  return (
    <Section>
      <ContainerLeft>
        <img src={Img} alt="" srcset="" />
      </ContainerLeft>
      <ContainerRight>
        <div className="calcouter">
          <div className="content">
            <h4>Book now</h4>
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. now
            </h5>
          </div>
          <div className="boxes">
            <div className="box1 subboxes">
              <InputWrapper heading="CITY" place="Enter City" />
            </div>
            <div className="box2 subboxes">
              <InputWrapper heading="ARRIVAL" place="10 October" />
            </div>
            <div className="box3 subboxes">
              <InputWrapper heading="DEPARTURE" place="11 October" />
            </div>
            <div className="box4 subboxes">
              <Counter heading="STAR" />
            </div>
            <div className="box5 subboxes">
              <Counter heading="ROOM" />
            </div>
          </div>
          <div className="button">
            <button class="button-31" role="button">
              Book Now
            </button>
          </div>
        </div>
      </ContainerRight>
    </Section>
  );
};
const Section = styled.div`
  background-color: #ffffff;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  padding-inline: 6% ;

  @media (max-width: 992px) {
      
    }
    @media (max-width: 840px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
`;
const ContainerLeft = styled.div`
  width: 40vw;
  height: 65rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
    @media (max-width: 992px) {
      
    }
  
  img {
    height: 100%;
    margin-bottom: 11rem;
    
    @media (max-width: 768px) {
    width: 33rem;
    height: 52rem;
    font-size: 2.5rem;
  }
  }
  
`;
const ContainerRight = styled.div`
  padding-inline-start: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 992px) {
      padding-inline-start: 0;
    }
  .calcouter {
    border-radius: 2rem;
    width: 42rem;
    height: 60rem;
    padding: 3rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0rem 1.8rem 5rem -1rem;
    .content {
      padding-bottom: 3rem;
    }
  @media (max-width: 492px) {
    width: 95%;
  }
  }
  h5 {
    color: ${({ theme }) => theme.colors.txt_light};
    font-size: 2rem;
  }
  h4 {
    font-size: 2rem;
    font-weight: 900;
    font-family: Roboto;
    font-size: 3.3rem;
    font-weight: 900;
    line-height: 38px;
    letter-spacing: 0em;
    text-align: left;
  }
  h5 {
    font-size: 1.6rem;
    font-weight: 400;
  }
  .boxes {
    margin-bottom: 2rem;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 1fr;
    height: 34rem;
    grid-gap: 2rem;
  }
  .subboxes {
  }
  .box1 {
    grid-row: 1/2;
    grid-column: 1/3;
  }
  .button-31 {
    background-color: #000;
    border-radius: .4rem;
    border-style: none;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    font-family: "Farfetch Basis", "Helvetica Neue", Arial, sans-serif;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    margin: 0;
    max-width: none;
    min-height: 4.4rem;
    min-width: 1rem;
    outline: none;
    overflow: hidden;
    padding: .9rem 2rem .8rem;
    position: relative;
    text-align: center;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.8rem;
    letter-spacing: .12607004642486572rem;
    text-align: center;
    position: absolute;
  }

  .button-31:hover,
  .button-31:focus {
    opacity: 0.75;
  }
`;

export default Booknow;
