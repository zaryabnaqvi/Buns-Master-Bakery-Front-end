import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { connect } from 'react-redux';
import { deleteCartItem, deleteCartItemQuantity, updateCartItemQuantity ,updateCartItem} from '../../redux/cart.action'; // Update the path accordingly

const CartItem = ({ cart, deleteCartItem,deleteCartItemQuantity,updateCartItemQuantity,updateCartItem }) => {
  useEffect(()=>{
    console.log(cart.items)
  });

  const handleDeleteItem = (productId) => {
    deleteCartItem(productId);
  };

  const handleDeleteItemQuantity = (productId) => {
    deleteCartItemQuantity(productId);
  };

  const handleQuantityChange = (product) => {
    console.log(product)
    const item = cart.items.find(it => it.product.id === product.id);
    console.log(item)
    const prevQuantity = item ? item.quantity : 0;
    updateCartItem({
        product,
        quantity: prevQuantity + 1
    });
  };

  const handleQuantityChange1 = (product) => {
    console.log(product)
    const item = cart.items.find(it => it.product.id === product.id);
    console.log(item)
    const prevQuantity = item ? item.quantity : 0;
    updateCartItem({
        product,
        quantity: prevQuantity - 2
    });
  };

  return (
    <Wrapper style={{overflowY:"scroll"}}>
      <div className="cart-products">
        {cart.items.map((ca) => {
          return (
            <div className="cart-product" key={ca.product.id}>
              <div className="img-container">
                <img src={ca.product.imgsrc} alt="" />
              </div>
              <div className="prod-details">
                <span className="name">{ca.product.pname}</span>
                <MdClose className="close-btn" onClick={() => deleteCartItem(ca.product.id)} />
                <div className="quantity-buttons">
                  <span onClick={() => handleDeleteItemQuantity(ca.product.id)}>-</span>
                  <span>{ca.quantity}</span>
                  <span onClick={() => handleQuantityChange(ca.product)}>+</span>
                </div>
                <div className="text">
                  <span>{ca.quantity}</span>
                  <span>x</span>
                  <span className="highlight">&#x24;{ca.product.price}</span>
                </div>
                <MdClose className="close-btn" onClick={() => deleteCartItem(ca.product.id)} />
              </div>
            </div>
          )
        })}
      </div>
    </Wrapper>
  );
};


const Wrapper = styled.section`
  flex-grow: 1;
  .cart-products {
    flex-grow: 1;
    .cart-product {
      padding: 20px 15px;
      display: flex;
      gap: 10px;
      .img-container {
        background-color: rgba(0, 0, 0, 0.05);
        width: 80px;
        height: 80px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        img {
          width: 90%;
          border-radius: 0.5rem;
        }
      }
      .prod-details {
        overflow: hidden;
        position: relative;
        .name {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          font-size: 16px;
          line-height: 1.5;
          margin-bottom: 10px;
          font-weight: 600;
          display: block;
          padding-right: 25px;
        }
        .text {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
          .highlight {
            color: ${({ theme }) => theme.colors.bg};
          }
        }
        svg {
          position: absolute;
          top: 0;
          right: 0;
          cursor: pointer;
          font-size: 1.5rem;
        }
        .quantity-buttons {
          width: fit-content;
          display: flex;
          border: 1px solid rgba(0, 0, 0, 0.2);
          height: 30px;
          margin-bottom: 8px;
          span {
            font-size: 14px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: #6b6b6b;
            &:nth-child(1) {
              font-size: 18px;
              border-right: 1px solid rgba(0, 0, 0, 0.2);
            }
            &:nth-child(2) {
              width: 40px;
            }
            &:nth-child(3) {
              font-size: 18px;
              border-left: 1px solid rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
      &:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

const mapStateToProps = state => ({
  cart: state.cart
});

const mapDispatchToProps = dispatch => ({
  deleteItem: (productId) => dispatch(deleteCartItem(productId)),
  deleteItemQuantity: (productId) => dispatch(deleteCartItemQuantity(productId)),
  updateQuantity: (productId, quantity) => dispatch(updateCartItemQuantity(productId, quantity))
});

export default connect(mapStateToProps, {deleteCartItem,deleteCartItemQuantity,updateCartItemQuantity,updateCartItem})(CartItem);