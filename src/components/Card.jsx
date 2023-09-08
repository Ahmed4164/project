import React from "react";
import Pic from "../assets/taskweb/Mask group.svg";
import { styled } from "styled-components";
const Card = ({item}) => {
    console.log(item)
  return (
    <SectionOuter>
      <ImageContainer className="image">
        <Image src={item.image} alt="" srcSet="" />
      </ImageContainer>
      <DataContainer>
        <p className="name">{item.name}</p>
        <p className="about">{item.about}</p>
      </DataContainer>
    </SectionOuter>
  );
};
const SectionOuter = styled.div`
  border: .2rem solid #fff;
  /* box-shadow: rgba(50, 50, 93, 0.25) 0rem 1.3rem, 2.7rem -.5rem, rgba(0, 0, 0, 0.3) 0rem .8rem 1.6rem -.8rem; */
  box-shadow: rgba(0, 0, 0, 0.24) 0rem .3rem .8rem;
  /* width: 25rem; */
  margin: 2rem;
  width: 36rem;
  height: 12rem;
  /* width: 20%; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  border-radius: 1.5rem;
  padding-inline: 2rem;
`;
const SectionInner = styled.div`
  border: .2rem solid green;
  /* width: 20rem; */
  /* height: 10rem; */
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  border-radius: 1.5rem;
`;
const ImageContainer = styled.div`
  /* border: 2px solid red; */
`;
const Image = styled.img`
  /* border: 2px solid blue; */
  /* width: 5rem; */
  height: 8rem;
  border-radius: 50%;
  aspect-ratio: 1;
`;
const DataContainer = styled.div`
  /* border: 2px solid; */
  /* height: 4rem; */
  padding-left: 2rem;
  p.name {
    font-weight: 700;
    font-size: 2rem;
  }
  p.about{
    font-size: 1rem;
  }
`;

export default Card;



