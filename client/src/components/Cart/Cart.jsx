import "./Cart.scss";
import { BsCartX } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import CartItem from "./CartItem/CartItem";
const Cart = ({ setShowCard }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="card-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCard(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>
        {/* <div className="empty-card">
            <BsCartX/>
            <span>No products in the cart.</span>
            <button className="return-cta">RETURN TO SHOP</button>
        </div> */}
        <>
        <CartItem/>
        <div className="card-footer">
            <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">123</span>
            </div>
            <div className="button">
                <button className="checkout-cta">Checkout</button>
            </div>
        </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
