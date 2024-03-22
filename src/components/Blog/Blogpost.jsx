import React from "react";
import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";

const Blogpost = (props) => {
  return (
    <Wrapper>
      <div className="product-card">
        <div className="thumbnail">
          <img src={props.imgsrc} alt="" />
        </div>
        <div className="prod-details">
          <span className="name">{props.pname}</span>
          <span className="price">{props.price}</span>
        </div>
      </div>
      <a className="read-btn">
        Read More <FiArrowRight />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-card {
    width: 32rem;
    margin-bottom: 1rem;
    .thumbnail {
      width: 100%;
      background-color: rgba(0, 0, 0, 0.05);
      margin-bottom: 10px;
      padding: 10px;
      display: flex;
      align-items: center;
      border-radius: 1rem;
      img {
        transition: all ease 0.3s;
        display: block;
        width: 100%;
      }
    }
    .prod-details {
      .name {
        font-size: 2rem;
        margin: 1.6rem 0 1rem;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: #232223;
      }
      .price {
        font-size: 1.6rem;
        color: #575457;
        font-weight: 400;
        line-height: 1.5;
      }
    }
    &:hover {
      .thumbnail {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
  .read-btn {
    color: ${({ theme }) => theme.colors.bg};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .product-card {
      width: 28rem;
    }
  }
`;

export default Blogpost;
