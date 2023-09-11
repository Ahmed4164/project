import React from "react";
import styled from "styled-components";
import { Carousel, CarouselItem } from "./Carousel.jsx";
// import "./styles.css";
import Icons from "../assets/Icons.png";

const items = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  src: `https://picsum.photos/500?idx=${i}`,
}));
const Section = styled.div`
  /* background-color: lightslategrey; */
  // height: 100vh;
  scroll-snap-align: center;
  padding-inline: 6%;
  .header{
    padding: 2rem;
    /* border: 2px solid red; */
    h2{
      @media (max-width: 768px) {
      font-size: 3.5rem;
  }
    }
  }

`;

const Destination = () => {
  return (
    <Section>
    <div className="header">
      <h2>Our Destinations</h2>
    </div>
    <Carousel
      items={items}
      renderItem={({ item, isSnapPoint }) => (
        <CarouselItem key={item.id} isSnapPoint={isSnapPoint}>
          <Card className="card">
            <div className="top">
              <img src={item.src} width="250" height="250" alt="Placeholder" />
            </div>
            <div className="bottom">
              <div className="name">
                <h3>Hardward University</h3>
              </div>
              <div className="address">
                <div className="add">
                  <h4>Cambridge, Massachusetts, UK</h4>
                </div>
                <div className="imagediv">
                  <img src={Icons} alt="" srcset="" />
                </div>
              </div>
            </div>
          </Card>
        </CarouselItem>
      )}
    />
    </Section>
  );
};

const Card = styled.div`
  /* border: 2px solid red; */
  border-radius: 2rem;
  margin: 2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0rem .7rem 2.9rem 0rem;
  
  .top{

    img{
      width: 100%;
      aspect-ratio: 1;
      border-radius: 2rem;
    }
  }
  .bottom {
    /* border: 2px solid blue; */
    .name {
      /* border: 2px solid red; */
      /* width:  360px; */
      /* height: 83px; */
      padding: 2.5rem;
      /* gap: 10px; */
      h3 {
        //styleName: Headline extra bold / h4;
        font-family: Roboto;
        font-size: 2.3rem;
        font-weight: 900;
        line-height: 3.3rem;
        letter-spacing: 0em;
        text-align: left;
      }
    }
    .address{
      /* border: 2px solid green; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      .add>h4{
        font-family: Roboto;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.6rem;
        letter-spacing: 0em;
        text-align: left;

      }
      .imagediv>img{
          width: 4rem;
      }
    }
  }
`;

export default Destination;

