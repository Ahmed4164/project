import React from 'react'
import { styled } from 'styled-components';

const Buttons= ({name}) => {
  console.log(name)
  return (
    <div>
        <Button class="button-17" role="button">{name}</Button>
    </div>
  )
}
const Button = styled.button`

  align-items: center;
  appearance: none;
  background-color: ${({theme})=>theme.colors.btn_bg};
  border-radius: 2.4rem;
  border-style: none;
  box-shadow: rgba(0, 0, 0, .2) 0 .3rem .5rem -.1rem,rgba(0, 0, 0, .14) 0 .6rem 1rem 0,rgba(0, 0, 0, .12) 0 .1rem 1.8rem 0;
  box-sizing: border-box;
  color: ${({theme})=>theme.colors.white_txt};
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans",Roboto,Arial,sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  height: 4.8rem;
  justify-content: center;
  letter-spacing: .025rem;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: .2rem 4.4rem;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(.4, 0, .2, 1),opacity 15ms linear 30ms,transform 270ms cubic-bezier(0, 0, .2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  will-change: transform,opacity;
  z-index: 0;

  &:hover {
  /* background: #F6F9FE; */
  color: #174ea6;
}

&:active {
  box-shadow: 0 .4rem .4rem 0 rgb(60 64 67 / 30%), 0 .8rem 1.2rem .6rem rgb(60 64 67 / 15%);
  outline: none;
}

&:focus {
  outline: none;
  border: .2rem solid #4285f4;
}

&:not(:disabled) {
  box-shadow: rgba(60, 64, 67, .3) 0 .1rem .3rem 0, rgba(60, 64, 67, .15) 0 .4rem .8rem .3rem;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, .3) 0 .2rem .3rem 0, rgba(60, 64, 67, .15) 0 .6rem 1.0rem .4rem;
}
&:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, .3) 0 .1rem .3rem 0, rgba(60, 64, 67, .15) 0 .4rem .8rem .3rem;
}

&:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, .3) 0 .4rem .4rem 0, rgba(60, 64, 67, .15) 0 .8rem 1.2rem .6rem;
}

&:disabled {
  box-shadow: rgba(60, 64, 67, .3) 0 .1rem .3rem 0, rgba(60, 64, 67, .15) 0 .4rem .8rem .3rem;
}
`;

export default Buttons;


