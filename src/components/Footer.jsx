import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
  padding-inline: 6%;
  .navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 1rem;
    padding-inline: 3rem;
    margin: 5rem; 540px) {
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
      ul {
        padding: 1rem;
        @media (max-width: 540px) {
          padding: 0.3rem;
        }
        li {
          .navlink {
            color: ${({ theme }) => theme.colors.navtext};
          }
        }
      }
    }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
      .courses {
        padding: 0;
      }
      ul {
        padding: 1rem;
        @media (max-width: 540px) {
          padding: 0.3rem;
        }
        li {

          .navlink {
            color: ${({ theme }) => theme.colors.txt_dim};
          }
          .navlink2 {
            color: ${({ theme }) => theme.colors.white_txt};
          }
        }
      }
    }
  }
`;

export default Footer;
