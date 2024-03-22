import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import Menu from "../FrontMenu/Menu";
import styled from "styled-components";
import Card from "./Card";
import Image1 from "/images/IMG_1452.jpg"

const Home = () => {
  const data = {
    heading: "WELCOME TO",
    meal: "BUNSMASTER",
    para: "We're the oldest bakery in town serving since 1978, famous for our breads and pizza dough. We are also serving frozen home baked pizza (better than takeout), we wont sell it unless It's Mom-Approved. We Make you serve!",
    button: "Order Online",
    image: "images/hero-img.png",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <Wrapper>
      <HeroSection {...data} />
    <Card/>
      <Menu innerPage={true} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .heading {
    margin: 5rem 0 0;
    text-transform: uppercase;
    font-size: 2.5rem;
    text-align: left;
    font-weight: 500;
    &:after {
      background-color: ${({ theme }) => theme.colors.bg};
      content: "";
      display: block;
      height: 3px;
      margin-top: 5px;
      width: 50px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .heading {
      font-size: 3rem;
      margin: 10rem 0 0;
    }
  }
`;

export default Home;
