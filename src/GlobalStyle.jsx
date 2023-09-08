import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    ${'' /* overflow-x: hidden; */}
};
html{
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
}
h1{
    color: ${({theme})=>theme.colors.TextColor};
    font-size: 8rem;
    font-weight: 700;
    line-height: 10ewm;
    letter-spacing: 0em;
    text-align: left;
    font-family: Poppins;
    font-size: 8rem;
    font-weight: 700;
    line-height: 10rem;
    letter-spacing: 0em;
    text-align: left;
}
h2{
    font-family: Poppins;
font-size: 6rem;
font-weight: 400;
line-height: 10rem;
letter-spacing: 0em;
text-align: left;


${'' /* 
font-family: Inter;
font-size: 80px;
font-weight: 500;
line-height: 100px;
letter-spacing: 0em;
text-align: left; */}

}
h3{
    ${'' /* font-family: Inter; */}
    font-size: 4rem;
    font-weight: 600;
    line-height: 4.8rem;
    letter-spacing: 0em;
    text-align: center;
}
a{
    text-decoration: none;
    ${'' /* font-family: Inter; */}
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.9rem;
    letter-spacing: 0em;
    text-align: left;
}
li{
    list-style: none;
}
@media (max-width: 768px) {
    html{
        font-size: 55%;
    }
  }
  ${'' /* @media (max-width: 1024px) {
    html{
        font-size: 60%;
    }
  } */}
  ${'' /* @media (max-width: 375px) {
    html{
        font-size: 40%;
    }
  } */}
  ${'' /* @media (max-width: 320px) {
    html{
        font-size: 30%;
    }
  } */}
   ${'' /* @media (max-width: 320px) {
    html{
        font-size: 30%;
    }
  } */}
   @media (max-width: 492px) {
    html{
        font-size: 25%;
    }
  }
   @media (max-width: 540px) {
    html{
        font-size: 40%;
    }
  }
   @media (max-width: 892px) {
    html{
        font-size: 45%;
    }
  }
  
  @media (max-width: 992px) {
    html{
        font-size: 50%;
    }
  }
  @media (max-width: 1200px) {
    html{
        font-size: 55%;
    }
  }
`;
