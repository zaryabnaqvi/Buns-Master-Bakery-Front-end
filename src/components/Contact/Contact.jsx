import React, { useEffect } from "react";
import styled from "styled-components";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Wrapper>
      <h1 className="contact-heading wrapper-background">
        Contact <span className="contact-sub-heading">Our Team</span>
      </h1>

      <div className="container">
        <div className="contact-inner">
          <div className="contact-form">
            <form
              action="https://formspree.io/f/mpzelowa"
              method="POST"
              className="contact-inputs"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="number"
                name="number"
                placeholder="Phone Number"
                autoComplete="off"
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="6"
                placeholder="Message"
                autoComplete="off"
                required
              ></textarea>

              <input type="submit" value="submit" />
            </form>
          </div>

          <div className="map">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1375617144654!2d77.09376195045455!3d28.505508696483773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1938456789c7%3A0x45a757aa37e73026!2sAMBIENCE%20MALL%2C%20GURUGRAM!5e0!3m2!1sen!2sin!4v1678786989017!5m2!1sen!2sin"
              width="90%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
         
            <iframe   
            width="90%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5960%20No%206%20Rd%20Ste%20604%20Richmond,%20BC%20V6V%201Z1+(Buns%20Master%20Bakery%20Richmond)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps trackers</a></iframe></div>
          
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-heading {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    .contact-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .contact-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    margin: 6rem 0;
  }
  .contact-form {
    width: 100%;
    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.3s;
        background-color: ${({ theme }) => theme.colors.btn};
        color:black;
        &:hover {
          background-color: ${({ theme }) => theme.colors.btn};
          border: 1px solid ${({ theme }) => theme.colors.bg};
          color: ${({ theme }) => theme.colors.bg};
        }
      }
    }
  }
  .map {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 0px 5px 0px #888888;
    padding: 0.2rem;
    margin: 0 auto;
    border-radius: 1rem;
    padding: 2rem;
    iframe {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      border-radius: 1rem;
      width: 100%;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .contact-heading {
      font-size: 4rem;
    }
    .contact-inner {
      flex-direction: row;
    }
    .contact-form {
      width: 40%;
    }
    .map {
      width: 60%;
    }
    .contact-inner {
      margin: 10rem 0 12rem;
    }
  }
`;

export default Contact;
