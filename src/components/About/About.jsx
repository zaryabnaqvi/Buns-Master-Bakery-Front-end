import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import Tilt from "react-tilt";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Wrapper>
      <h1 className="about-heading wrapper-background">
        About <span className="about-sub-heading">Us</span>
      </h1>

      <div className="container">
        <div className="section-inner">
          <div className="section-hero-image">
            <picture>
              <Tilt className="Tilt">
                <div className="Tilt-inner">
                  <img
                    className="hero-img"
                    src="/images/about-img.png"
                    alt=""
                  />
                </div>
              </Tilt>
            </picture>
          </div>
          <div className="section-hero-data">
            <h1 className="heading-text">WHO ARE WE ?</h1>
            <p className="hero-para">
            We owns and operate a bakery production facilty and retail store in Richmond, British Columbia.

Buns Master is the oldest bakery in town operating <b style={{color:"white!imporant" ,opacity:1}}>since 1978</b> serving the community with fine breads and pizza dough.

A new idea was born to bring" Food the way Mom makes it" to the public and in result frozen pizza was added to our production.

We believe Frozen Pizza will become a large part of what we do. We make the pizza crust, the sauce and our toppings has high standard of toppings.

"Quality is a throwaway word these days, but in our case, we use the work qualtiy with confidence. We know exactly what's in our, from beginning to end.

Our believe is that our pizza business will grow because busy families are looking for quick, easy, oven-ready, delicious and nutritious things. They're looking for food they can trust, and serve with confidence. They are looking for food that is Mom approved.

Our goal is to serve many families by supplying more and more stores with our pizzas and some of our products.

We would love to serve your family too!
            </p>
            <Button style={{  textShadow: '0 0 10px rgba(0, 0, 0, 0.5)'}} className="btn">
              <NavLink style={{color:"black"}} to="/contact">
                Know More <BsFillArrowRightCircleFill />
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-heading {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    .about-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .section-inner {
    margin: 7rem 0;
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
  .heading-text {
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 600;
    color:  ${({ theme }) => theme.colors.white};
    span {
      color: ${({ theme }) => theme.colors.black};
    }
  }
  .btn {
    max-width: fit-content;
    border-radius: 5rem;
    background-color: #FBA906};
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }
  a {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .about-heading {
      font-size: 4rem;
    }
    .section-inner {
      margin: 5rem 0;
      display: flex;
      flex-direction: row;
      gap: 5rem;
    }
    .section-hero-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
    }
    .section-hero-image {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
    }
    a {
      font-size: 1.6rem;
    }
    .section-inner {
      margin: 10rem 0;
      display: flex;
      flex-direction: row;
      gap: 5rem;
    }
    .heading-text {
      font-size: 4rem;
    }
  }
`;

export default About;
