import React from "react";
import styled from "styled-components";
import Card from "./Card";
// import Image1 from "../assets/taskweb/Mask group.svg";
// import Image2 from "../assets/taskweb/Mask group.svg";
// import Image3 from "../assets/taskweb/Mask group.svg";
import Image1 from "../assets/avatar1.svg";
import Image2 from "../assets/avatar2.svg";
import Image3 from "../assets/avatar3.svg";
import Buttons from "./Buttons";

const data = [
  {
    image: Image1,
    name: "Jenny",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem praesentium ",
  },
  {
    image: Image2,
    name: "Jenny",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem praesentium ",
  },
  {
    image: Image3,
    name: "Jenny",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem praesentium ",
  },
];

const TropicalAdventure = () => {
  return (
    <Section>
      <ContainerLeft>
        {/* <Container> */}

        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
        {/* </Container> */}
      </ContainerLeft>
      <ContainerRight>
        <div>
          <p>Tropical Adventure</p>
        </div>
        <div>
          <p>for Students.</p>
        </div>
        <div className="quote">
          <h4>Student Tropical Vacation: Relax and Recharge</h4>
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
    </Section>
  );
};

// Rest of your component remains the same...

const Section = styled.div`
  background-color: #fff;
  /* height: 100vh; */
  margin-block: 12rem;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
  width: 85vw;
  padding-inline: 6%;
  margin-inline: auto;
  /* border: 2px solid red; */
  /* align-items: center; */
  /* @media (max-width: 768px) {
    flex-direction: column-reverse;
  } */
  @media (max-width: 1200px) {
    /* width: 34rem; */
    /* border: 2px solid red; */
    padding: 0;
    /* height: 52rem; */
  }
  @media (max-width: 840px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }

`;
const ContainerLeft = styled.div`
  /* width: 60vw; */
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 10rem; */
  /* @media (max-width: 768px) {
    padding-top: 20rem;
  } */
  @media (max-width: 992px) {
      /* border: 2px solid red; */
      padding: 2rem;
    }
    @media (max-width: 840px) {
      margin-bottom: 2rem;
    }
  
`;
const ContainerRight = styled.div`
  /* width: 63rem; */
  /* height: 52rem; */
  /* padding-inline-start: 10rem; */
  /* border: 2px solid red; */
  position: relative;
  display: flex;
  padding: 4rem;
  /* justify-content: center; */
  /* align-items: center; */
  /* padding-top: 12rem ; */
  flex-direction: column;
  @media (max-width: 840px) {
      padding-block: 5rem;
    }
  h5 {
    color: ${({ theme }) => theme.colors.txt_light};
    font-size: 2rem;
  }
  .buttonContainer {
    /* border: 2px solid red; */
    position: absolute;
    /* top: 10rem; */
    bottom: 3rem;
    /* @media (max-width: 768px) {
      bottom: -10rem;
  } */
  @media (max-width: 1200px) {
    /* width: 34rem; */
    /* border: 2px solid red; */
    bottom: 0rem;
    /* height: 52rem; */
  }
  }
  p {
    font-size: 5rem;
    @media (max-width: 1200px) {
    /* width: 34rem; */
    /* border: 2px solid red; */
    font-size: 3.5rem;
    /* bottom: 0rem; */
    /* height: 52rem; */
  }
    
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
    li{
      list-style: disc;
      font-size: 1.6rem;
      font-weight: 400;
      padding-block:0.5rem ;
    }
  }
`;

export default TropicalAdventure;
