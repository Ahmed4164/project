import React from "react";
import { styled } from "styled-components";

const InputWrapper = ({ heading, place }) => {
  return (
    <Outer className="fields">
      <div className="header">
        <h5>{heading}</h5>
      </div>
      <div className="input">
        <input type="text" id="fname" name="firstname" placeholder={place} />
      </div>
    </Outer>
  );
};
const Outer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  .input {
    input {
      width: 100%;
      background-color: rgba(243, 243, 243, 1);
    }
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
h5{
    color: ${({ theme }) => theme.colors.txt_black};
    font-family: Roboto;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 2.7rem;
    letter-spacing: 0.5836576223373413px;
    text-align: left;

}
`;

export default InputWrapper;
