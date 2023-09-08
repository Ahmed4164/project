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
  box-shadow: rgba(0, 0, 0, 0.24) 0rem .3rem .8rem;
  margin: 2rem;
  width: 36rem;
  height: 12rem;
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  padding-inline: 2rem;
`;
const SectionInner = styled.div`
  border: .2rem solid green;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
`;
const ImageContainer = styled.div`
`;
const Image = styled.img`
  height: 8rem;
  border-radius: 50%;
  aspect-ratio: 1;
`;
const DataContainer = styled.div`
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



