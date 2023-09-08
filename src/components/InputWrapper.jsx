import React from "react";
import { styled } from "styled-components";

const InputWrapper = ({ heading, place }) => {
  return (
    // <div>
    <Outer className="fields">
      <div className="header">
        <h5>{heading}</h5>
      </div>
      <div className="input">
        <input type="text" id="fname" name="firstname" placeholder={place} />
      </div>
    </Outer>
    // </div>
  );
};
const Outer = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  .input {
    /* border: 2px solid red; */
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
  /* input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
} */
`;

export default InputWrapper;
