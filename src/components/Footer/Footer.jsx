import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper style={{backgroundColor:"#111111"}}>
      <div style={{backgroundColor:"#111111",}} className="container">
        <footer className="footer">
          <div className="footer-content">
            <div className="col">
              <div className="title">About</div>
              <div className="text">
              We're the oldest bakery in town serving since 1978, 
              famous for our breads and pizza dough. We are also 
              serving frozen home baked pizza (better than takeout), 
              we wont sell it unless It's Mom-Approved. We Make you serve!
              </div>
            </div>
            <div className="col">
              <div className="title">Contact</div>
              <div className="c-item">
                <FaLocationArrow />
                <div className="text">UNIT 604, 5960 NO 06 ROAD, RICHMOND V6V1Z1</div>
              </div>
              <div className="c-item">
                <FaMobileAlt />
                <div className="text">Phone: (604) 278-8321</div>
              </div>
              <div className="c-item">
                <FaEnvelope />
                <div className="text">Email: bunsmasterrichmond@gmail.com</div>
              </div>
            </div>
            <div className="col">
              <div className="title">Menu</div>
             <Link> <span className="text">Pizza</span></Link>
             <Link> <span className="text">Restaurant</span></Link>
             <Link> <span className="text">Bakery</span></Link>
             {/* <Link> <span className="text">Samosa</span></Link> */}
            {/* <span className="text">Drinks</span> */}
            </div>
            <div className="col">
              <div className="title">Pages</div>
            <Link>  <span className="text">Home</span></Link>
            <Link>  <span className="text">Restaurant</span></Link>
            <Link>  <span className="text">Frozen Pizza</span></Link>
            <Link>  <span className="text">Bakery</span></Link>
            <Link>  <span className="text">Contact</span></Link>
            </div>
          </div>
        </footer>
      </div>
  
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer {
    width: 100%;
    
    .footer-content {

      padding: 50px 0px;
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-flow: wrap;
      gap: 20px;
      .col {
        max-width: 300px;
        .title {
          margin-bottom: 20px;
          font-size: 20px;
          color:rgb(184, 0, 31);
        }
        .text {
          color: white;
          font-size: 14px;
          opacity:0.8;
        }
        .c-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          svg {
            flex-shrink: 0;
            font-size: 14px;
            margin-right: 10px;
            color:rgb(184, 0, 31) ;
          }
        }
        span {
          &.text {
            display: block;
            margin-bottom: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
  .bottom-bar {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #f7f5f5;
    .bottom-bar-content {
      padding: 20px;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
      gap: 10px;
      .text {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .footer-content {
      justify-content: space-between;
      padding: 50px 0px;
    }
    .bottom-bar-content {
      padding: 0;
      height: 60px;
      max-width: 1200px;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }
  }
`;

export default Footer;
