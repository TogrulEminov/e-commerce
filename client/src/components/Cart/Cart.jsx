import './Cart.scss';
import { BsCartX } from 'react-icons/bs';
import { MdClose } from 'react-icons/md';
import CartItem from './CartItem/CartItem';
import { useContext, useEffect } from 'react';
import { Context } from '../../utils/Context';
import { loadStripe } from '@stripe/stripe-js';
import {
  REACT_APP_STRAP_Publishable_KEY,
  makePaymentRequest,
} from '../../utils/api';
const Cart = ({ setShowCard }) => {
  const { cartSubTotal, cartItems } = useContext(Context);
  useEffect(() => {
    window.scrollTo(
      {
        top: 0,
        left: 0,
        behavior: 'smooth',
      },
      []
    );
  }, []);

  const stripePromise = loadStripe(REACT_APP_STRAP_Publishable_KEY);
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post('/api/orders', {
        products: cartItems,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };
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
        {!cartItems?.length && (
          <div className="empty-card">
            <BsCartX />
            <span>No products in the cart.</span>
            <button className="return-cta" onClick={() => {}}>
              RETURN TO SHOP
            </button>
          </div>
        )}
        <>
          {!!cartItems?.length && (
            <>
              <CartItem />
              <div className="card-footer">
                <div className="subtotal">
                  <span className="text">Subtotal:</span>
                  <span className="text total">&#8377; {cartSubTotal}</span>
                </div>
                <div className="button">
                  <button className="checkout-cta" onClick={handlePayment}>
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Cart;
