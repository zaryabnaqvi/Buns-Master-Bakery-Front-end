import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="error-inner">
          <h1>404</h1>
          <span>
            We're sorry, but we can't find the page you were looking for. It's
            probably some thing we've done wrong but now we know about it and
            we'll try to fix it.
          </span>
          <Button className="btn">
            <NavLink to="/">
              Go Home <BsFillArrowRightCircleFill />
            </NavLink>
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .error-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 7rem auto;
    h1 {
      color: ${({ theme }) => theme.colors.bg};
      font-size: 10rem;
      line-height: 1.2;
    }
    span {
      color: ${({ theme }) => theme.colors.black};
      font-size: 1.6rem;
      text-align: center;
      line-height: 1.5;
    }
    .btn {
      background-color: ${({ theme }) => theme.colors.bg};
      border-radius: 5rem;
      margin: 3rem 0;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      font-size: 1.4rem;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .error-inner {
      width: 60rem;
      margin: 8rem auto;
      h1 {
        font-size: 20rem;
      }
    }
    a {
      font-size: 1.5rem;
    }
  }
`;

export default Error;
