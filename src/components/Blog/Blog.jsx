import React from "react";
import Blogpost from "./Blogpost";
import Bdata from "./Bdata";
import styled from "styled-components";

const Blog = () => {
  return (
    <Wrapper>
      <h1 className="blog-heading wrapper-background">
        Read <span className="blog-sub-heading">Our Blogs</span>
      </h1>
      <div className="container">
        <div className="blog-container">
          <div className="blogs">
            <Blogpost
              id={Bdata[0].id}
              imgsrc={Bdata[0].imgsrc}
              pname={Bdata[0].pname}
              price={Bdata[0].price}
            />
            <Blogpost
              id={Bdata[1].id}
              imgsrc={Bdata[1].imgsrc}
              pname={Bdata[1].pname}
              price={Bdata[1].price}
            />
            <Blogpost
              id={Bdata[2].id}
              imgsrc={Bdata[2].imgsrc}
              pname={Bdata[2].pname}
              price={Bdata[2].price}
            />
            <Blogpost
              id={Bdata[3].id}
              imgsrc={Bdata[3].imgsrc}
              pname={Bdata[3].pname}
              price={Bdata[3].price}
            />
            <Blogpost
              id={Bdata[4].id}
              imgsrc={Bdata[4].imgsrc}
              pname={Bdata[4].pname}
              price={Bdata[4].price}
            />
            <Blogpost
              id={Bdata[5].id}
              imgsrc={Bdata[5].imgsrc}
              pname={Bdata[5].pname}
              price={Bdata[5].price}
            />
            <Blogpost
              id={Bdata[6].id}
              imgsrc={Bdata[6].imgsrc}
              pname={Bdata[6].pname}
              price={Bdata[6].price}
            />
            <Blogpost
              id={Bdata[7].id}
              imgsrc={Bdata[7].imgsrc}
              pname={Bdata[7].pname}
              price={Bdata[7].price}
            />
            <Blogpost
              id={Bdata[8].id}
              imgsrc={Bdata[8].imgsrc}
              pname={Bdata[8].pname}
              price={Bdata[8].price}
            />
            <Blogpost
              id={Bdata[9].id}
              imgsrc={Bdata[9].imgsrc}
              pname={Bdata[9].pname}
              price={Bdata[9].price}
            />
            <Blogpost
              id={Bdata[10].id}
              imgsrc={Bdata[10].imgsrc}
              pname={Bdata[10].pname}
              price={Bdata[10].price}
            />
            <Blogpost
              id={Bdata[11].id}
              imgsrc={Bdata[11].imgsrc}
              pname={Bdata[11].pname}
              price={Bdata[11].price}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .blog-heading {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    .blog-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .blog-container {
    margin: 5rem 0;
    .sec-heading {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
    }
    .blogs {
      display: flex;
      flex-flow: wrap;
      align-items: flex-start;
      justify-content: center;
      column-gap: 2.5rem;
      row-gap: 4.5rem;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .blog-heading {
      font-size: 4rem;
    }
    .blog-container {
      margin: 5rem 0 12rem;
    }
  }
`;

export default Blog;
