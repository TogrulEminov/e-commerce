import './CartItem.scss';
import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-1.webp';
import { useContext, useEffect } from 'react';
import { Context } from '../../../utils/Context';
import { REACT_DEV_URL } from '../../../utils/api';
const CartItem = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        }, []);
      }, []);
  const { cartItems, handleRemoveCart, handleCartProductQuantity } =
    useContext(Context);
  return (
    <div className="card-products">
      {cartItems?.map((item) => (
        <div className="card-product" key={item.id}>
          <div className="img-container">
            <img
              src={REACT_DEV_URL + item?.attributes?.img?.data[0]?.attributes?.url}
              alt={item?.title}
            />
          </div>
          <div className="prod-details">
            <span className="name">{item?.attributes?.title}</span>
            <MdClose
              className="close-btn"
              onClick={() => handleRemoveCart(item)}
            />
            <div className="quantity-buttons">
              <span onClick={() => handleCartProductQuantity('dec', item)}>
                -
              </span>
              <span>{item.attributes.quantity}</span>
              <span onClick={() => handleCartProductQuantity('inc', item)}>
                +
              </span>
            </div>
            <div className="text">
              <span>{item.attributes.quantity}</span>
              <span>x</span>
              <span className="highlight">
                &#8377;{item?.attributes?.price * item.attributes.quantity}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItem;
