import React from "react";
import styled from "styled-components";
import Img from "../assets/taskweb/card-image4.svg";

const Testimonials = () => {
  return (
    <Section>
      <div className="header">
        <h2>Testimonials</h2>
      </div>
      <div className="mainContainer">
        <div className="container">
          <div className="top">
            <img src={Img} alt="" srcset="" />
            <h4 className="name">Andrew</h4>
            <hr className="line" />
          </div>
          <div className="bottom">
            <h4 className="abouttext">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="top">
            <img src={Img} alt="" srcset="" />
            <h3 className="name">Andrew</h3>
            <hr className="line" />
          </div>
          <div className="bottom">
            <h4 className="abouttext">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h4>
          </div>
        </div>
        <div className="container">
          <div className="top">
            <img src={Img} alt="" srcset="" />
            <h3 className="name">Andrew</h3>
            <hr className="line" />
          </div>
          <div className="bottom">
            <h4 className="abouttext">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h4>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="inner">
          <h3>Student Special: Discounted rates on tropical getaways!</h3>
          <div className="text">
            <h4>
              Let’s embody your beautiful ideas together, simplify the way you
              visualize your next big things.
            </h4>
          </div>
        </div>
      </div>
    </Section>
  );
};
const Section = styled.div`
  background-color: pink;
  scroll-snap-align: center;
  background-color: #fff;
  margin-top: 12rem;

  .header {
    width: 100%;
    align-content: center;
    display: flex;
    justify-content: center;
    padding-top: 2rem;
    div {
      text-align: center;
    }
  }
  .mainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25rem;
    @media (max-width: 840px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
  .container {
    width: 40rem;
    padding: 2rem;
    .bottom {
    }
  }
  .name {
  }
  .line {
    color: #000;
    width: 40%;
    height: 0.2vh;
    border: none;
    background-color: ${({ theme }) => theme.colors.horizontal};
    margin-top: 2rem;
  }
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-block: 2rem;
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
    }
    .name {
      font-size: 3rem;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.2rem;
      letter-spacing: 0em;
      text-align: center;
      color: ${({ theme }) => theme.colors.txt_light};
    }
  }
  .abouttext {
    font-size: 3rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 0em;
    text-align: center;
    color: ${({ theme }) => theme.colors.txt_light};
  }
  .bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-inline: 3rem;
    @media (max-width: 580px) {
          
        }
    .inner {
      width: 60%;
      @media (max-width: 580px) {
        width: 80%;
        }
        @media (max-width: 480px) {
        width: 90%;
        }
        h3{
        }
      .text {
        width: 50%;
        text-align: center;
        padding-block: 3rem;
        margin: auto;
        @media (max-width: 580px) {
        width: 70%;
        }
        h4 {
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 2.2rem;
          letter-spacing: 0em;
          text-align: center;
          color: ${({ theme }) => theme.colors.txt_light};
          @media (max-width: 480px) {
            font-size: 1.6rem;
        }
        }
      }
    }
  }
`;

export default Testimonials;
