import React from "react";
import Menuitems from "./Menuitems";
import Mdata from "./Mdata";
import styled from "styled-components";
import { connect } from 'react-redux';
import { updateCartItem } from "../../redux/cart.action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Menu = ({innerPage,cart , updateCartItem }) => {



  const handleAddToCart = (product) => {
    console.log(product)
    const item = cart.items.find(it => it.product.id === product.id);
    console.log(item)
    const prevQuantity = item ? item.quantity : 0;
    updateCartItem({
        product,
        quantity: prevQuantity + 1
    });
    toast("ADDED TO THE CART",{autoClose:500})
}
  return (
    <Wrapper>
      {!innerPage && (
        <h1 className="menu-heading wrapper-background">
          Frozen Pizza <span className="menu-sub-heading">Menu</span>
        </h1>
      )}
       <ToastContainer />
      
      <div className="container">
        <div className="seven">
      <h1>LATEST ITEMS</h1>
      </div>
        <div className="products-container">
          <div className="products">
            {Mdata.map((menu) => (
              <Menuitems
                menu={menu}
                id={menu.id}
                imgsrc={menu.imgsrc}
                pname={menu.pname}
                price={menu.price}
                addToCart={handleAddToCart}
                
              />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`

.seven h1 {
  text-align: center;
  margin-top: 4rem;
      font-size:40px; 
      font-weight:700;
       color:#f8f8f8; 
       letter-spacing:2px;
      text-transform: uppercase;

  
      display: grid;
      grid-template-columns: 1fr max-content 1fr;
      grid-template-rows: 27px 0;
      grid-gap: 20px;
      align-items: center;
  }
  
  .seven h1:after,.seven h1:before {
      content: " ";
      display: block;
      border-bottom: 1px solid #c50000;
      border-top: 1px solid #c50000;
      height: 5px;
    border-color:yellow;
    background-color:rgb(184, 0, 31);
  }
  .menu-heading {
    text-transform: uppercase;
    font-size: 3rem;
    text-align: center;
    .menu-sub-heading {
      color: ${({ theme }) => theme.colors.bg};
    }
  }
  .products-container {
    margin: 5rem 0;
    .sec-heading {
      margin-bottom: 20px;
      font-size: 18px;
      font-weight: 500;
      text-transform: uppercase;
    }
    .products {
      display: flex;
      flex-flow: wrap;
      align-items: flex-start;
      justify-content: center;
      row-gap: 3rem;
      column-gap: 1.5rem;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .menu-heading {
      font-size: 4rem;
    }
    .products-container {
      margin: 10rem 0;
      .products {
        display: flex;
        flex-flow: wrap;
        align-items: flex-start;
        justify-content: center;
        column-gap: 3rem;
        row-gap: 4.5rem;
      }
    }
  }
`;



const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  {updateCartItem}
)(Menu);