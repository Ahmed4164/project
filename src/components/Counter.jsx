import React, { useState } from "react";
import { styled } from "styled-components";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";
const Counter = ({ heading }) => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  return (
    <Outer className="fields">
      <div className="header">
        <h5>{heading}</h5>
      </div>
      <div className="input">
        <div className="button1" onClick={() => Increment()}>
          <img src={Plus} alt="" srcset="" />
        </div>

        <div className="counterResult">
          <p>{count}</p>
        </div>
        <div className="button2" onClick={() => Decrement()}>
        <img src={Minus} alt="" srcset="" />
        </div>
      </div>
    </Outer>
  );
};
const Outer = styled.div`

  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  .input {

    border-radius: 2rem;
    display: flex;
    background-color: rgba(243, 243, 243, 1);
    input {
      width: 100%;
      padding: 2rem;
      background-color: rgba(243, 243, 243, 1);

      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .counterResult{

        width: 100%;
        height: 100%;
        padding-block: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            font-size: 1.6rem;
        }
      }
  }
  .button1 {
    justify-content: center;
    padding: 2rem;
    border-bottom-left-radius: 2rem;
    border-top-left-radius: 2rem;
    background: #ebebeb;

    align-self: center;
  }
  .button2 {
    justify-content: center;
    padding: 2rem;
    border-bottom-right-radius: 2rem;
    border-top-right-radius: 2rem;
    background: #ebebeb;
    align-self: center;
  }
  input[type="text"],
  select {
    width: 100%;
    padding: 1.2rem 2rem;
    margin: .8rem 0;
    display: inline-block;
    border: .1rem solid #ccc;
    border-radius: .4rem;
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  ::placeholder {
    color: #78858f;
  }
  h5 {
    color: ${({ theme }) => theme.colors.txt_black};
    font-family: Roboto;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2.7rem;
    letter-spacing: 0.5836576223373413px;
    text-align: left;
  }
`;

export default Counter;
