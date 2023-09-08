import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import Buttons from "./Buttons";
import Icon1 from '../assets/plus.png'
import Icon2 from '../assets/minus.png'
import { useState } from "react";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <>
      <Section>
        <nav className="navbar">
        <div className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {
          isNavExpanded ? <img src={Icon2} alt="" srcset="" /> : <img src={Icon1} alt="" srcset="" />
        }
              
          </div>
          <div  className={
          isNavExpanded ? "resp" : "left"
        }>
            <ul>
              <li>
                <NavLink className="navlink" to="/">
                  Home
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink className="navlink" to="/">
                  About
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink className="navlink" to="/">
                  Schedule
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink className="navlink" to="/">
                  Membership
                </NavLink>
              </li>
            </ul>
            <ul>
              <li>
                <NavLink className="navlink" to="/">
                  Pricing
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div className="right">
            <ul>
              <li>
                <NavLink className="navlink1" to="/">
                  offers
                </NavLink>
              </li>
            </ul>
            <ul className="courses">
              <li>
                <NavLink className="navlink2" to="/">
                    <Buttons name='Courses'/>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Section>
    </>
  );
};

const Section = styled.section`
  /* border: 2px solid red; */
  padding-inline: 6%;
  padding-block: 2rem;
  overflow: hidden;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem;
    padding-inline: 3rem;
    .hamburger{
      display: none;
    }
    @media (max-width: 992px) {
      padding-block: 0rem;
    padding-inline: 0rem;
  }
    .left {
      display: flex;
      padding-left: 15%;
      ul {
        /* border: 1px solid; */
        padding: 1rem;
        li {
          /* border: 1px solid blue; */
          .navlink {
            /* border: 1px solid red; */
            padding-inline: 1.5rem;
            color: ${({ theme }) => theme.colors.navtext};
          }
        }
      }
      @media (max-width: 992px) {
      /* padding-block: 0rem; */
      padding-left: 0%;
  }
  @media (max-width: 798px) {
      /* padding-block: 0rem; */
      /* padding-left: 0%; */
      display: none;
      .hamburger{
        display: block;
      }
  }
    }
    @media (max-width: 798px) {
      .hamburger{
        display: block;
      }
  }
    .right {
      display: flex;
      justify-content: center;
      align-items: center;
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
        li {
          /* border: 1px solid blue; */

          .navlink1 {
            /* border: 1px solid red; */
            padding-inline: 2rem;
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

export default Header;
