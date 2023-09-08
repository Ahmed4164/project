import React from "react";
import styled from "styled-components";
import Buttons from "./Buttons";
import Img from "../assets/taskweb/Group 167.svg";
import InputWrapper from "./InputWrapper";
import Counter from "./Counter";
// import Buttons from "./Buttons";
// const Section = styled.div`
//   background-color: red;
//   height: 100vh;
//   scroll-snap-align: center;
// `;
const Booknow = () => {
  return (
    <Section>
      <ContainerLeft>
        {/* <Container> */}

        <img src={Img} alt="" srcset="" />
        {/* </Container> */}
      </ContainerLeft>
      <ContainerRight>
        {/* <div>
          <p>Tropical Adventure</p>
        </div>
        <div>
          <p>for Students.</p>
        </div>
        <div className="quote">
          <h4>Student Tropical Vacation: Relax and Recharge</h4>
        </div>
        <div className="para">
          <li>Lorem ipsum dolor, sit amet</li>
          <li>Lorem ipsum dolor, sit amet</li>
          <li>Lorem ipsum dolor, sit amet</li>
          <li>Lorem ipsum dolor, sit amet</li>
          <li>Lorem ipsum dolor, sit amet</li>
        </div>
        <div className="buttonContainer">
          <Buttons name="Explore More" />
        </div> */}
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
            {/* <Buttons name="Book now" /> */}
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
  /* height: 100vh; */
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  /* border: 2px solid red; */
  padding-inline: 6% ;
  /* @media (max-width: 768px) {
    flex-direction: column-reverse;
  } */
  /* align-items: center; */
  @media (max-width: 992px) {
      /* border: 2px solid red; */
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
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding-inline: -10rem; */
  /* padding: 10rem; */
  /* @media (max-width: 768px) {
      display: block;
      width: 100%;
      margin: auto;
    } */
    @media (max-width: 992px) {
      /* border: 2px solid red; */
    }
  
  img {
    height: 100%;
    /* border: 2px solid red; */
    margin-bottom: 11rem;
    /* @media (max-width: 768px) {
      margin-bottom: 0;
    } */
    /* height: 58rem; */
    
    @media (max-width: 768px) {
    width: 33rem;
    height: 52rem;
    font-size: 2.5rem;
  }
  }
  
`;
const ContainerRight = styled.div`
  /* width: 63rem; */
  /* height: 52rem; */
  padding-inline-start: 15rem;
  /* border: 2px solid red; */
  /* position: relative; */
  display: flex;
  justify-content: center;
  /* align-items: center; */
  /* padding-top: 12rem ; */
  flex-direction: column;
  @media (max-width: 992px) {
      /* border: 2px solid red; */
      padding-inline-start: 0;
    }
  .calcouter {
    /* border: 2px solid blue; */
    border-radius: 2rem;
    width: 42rem;
    height: 60rem;
    padding: 3rem;
    /* position: relative; */
    box-shadow: rgba(0, 0, 0, 0.2) 0rem 1.8rem 5rem -1rem;
    .content {
      padding-bottom: 3rem;
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
    /* border: 2px solid red; */
    margin-bottom: 2rem;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 1fr;
    height: 34rem;
    /* grid-auto-rows: 100px; */
    /* grid-row-gap: 2rem; */
    /* grid-column-gap: 2rem; */
    grid-gap: 2rem;
  }
  .subboxes {
    /* border: 1px solid green; */
  }
  .box1 {
    /* background-color: red; */
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
    /* width: 100%; */
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.8rem;
    letter-spacing: .12607004642486572rem;
    text-align: center;
    position: absolute;
    /* bottom: ; */
    /* width: 88px; */
    /* height: 18px */
  }

  .button-31:hover,
  .button-31:focus {
    opacity: 0.75;
  }
`;

export default Booknow;
