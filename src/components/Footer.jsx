import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// const Section = styled.div`
//   background-color: lightgoldenrodyellow;
//   height: 50vh;
//   scroll-snap-align: center;
// `;

const Footer = () => {
  return (
    <Section>
      <div className="navbar">
        <div className="left">
          <ul>
            <li>
              <NavLink className="navlink" to="/">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink className="navlink" to="/">
                Terms of Use
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink className="navlink" to="/">
                Sales and Refunds
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink className="navlink" to="/">
                Legal
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <NavLink className="navlink" to="/">
                Home
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink className="navlink" to="/about">
                About
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink className="navlink" to="/schedule">
                Schedule
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink className="navlink" to="/membership">
                Membership
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink className="navlink" to="/pricing">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};
const Section = styled.section`
  /* border: 2px solid red; */
  padding-inline: 6%;
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 1rem;
    padding-inline: 3rem;
    /* border: 2px solid red; */
    margin: 5rem;
    @media (max-width: 540px) {
      /* border: 2px solid red; */
      flex-direction: column;
      padding-block: 0rem;
      padding-inline: 0rem;
    }
    @media (max-width: 992px) {
      flex-direction: column;
      padding-block: 0rem;
      padding-inline: 0rem;
    }
    .left {
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 2px solid blue; */
      ul {
        /* border: 1px solid; */
        padding: 1rem;
        @media (max-width: 540px) {
          padding: 0.3rem;
        }
        li {
          /* border: 1px solid blue; */
          .navlink {
            /* border: 1px solid red; */
            /* padding: 2rem; */
            color: ${({ theme }) => theme.colors.navtext};
          }
        }
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 2px solid green; */
      .courses {
        /* background-color: ${({ theme }) => theme.colors.btn_bg};
        border-radius: 1.5rem;
        width: 10rem;
        display: flex;
        justify-content: center;
        align-items: center; */
        padding: 0;
      }
      ul {
        /* border: 1px solid; */
        padding: 1rem;
        @media (max-width: 540px) {
          padding: 0.3rem;
        }
        li {
          /* border: 1px solid blue; */

          .navlink {
            /* border: 1px solid red; */
            /* padding: 2rem; */
            color: ${({ theme }) => theme.colors.txt_dim};
          }
          .navlink2 {
            /* border: 1px solid red; */
            /* padding: 2rem; */
            color: ${({ theme }) => theme.colors.white_txt};
          }
        }
      }
    }
  }
`;

export default Footer;
