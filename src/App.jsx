import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import styled from "styled-components";
import Booknow from "./components/Booknow";
import TropicalAdventure from "./components/TropicalAdventure";
import Destination from "./components/Destination";
import Discounts from "./components/Discounts";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Schedule from "./Pages/Schedule";
import Membership from "./Pages/Membership";
import Pricing from "./Pages/Pricing";
import Offers from "./Pages/Offers";
import Courses from "./Pages/Courses";
import Header from "./components/Header";
import About from "./Pages/About";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  const theme = {
    colors: {
      horizontal: '#A0CD9E',
      navtext: "#262626",
      TextColor: "#1F2027",
      btn_bg: "#F27A44",
      white_txt: "#ffffff",
      // txt_light: "#505C59",
      txt_black: "#000000",
      testimonial_text: "#2D2E2E",
      input_txt: "#78858F",
      input_bg: "#F3F3F3",
      book_btn: "#000",
      txt_dim: "#7D7D7D",
      hero_background: 'rgba(248, 241, 211, 0.25)',
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/" element={<About />} />
          <Route path="/" element={<Schedule />} />
          <Route path="/" element={<Membership />} />
          <Route path="/" element={<Pricing />} />
          <Route path="/" element={<Offers />} />
          <Route path="/" element={<Courses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
