import RelatedProducts from './RelatedProducts/RelatedProducts';
import './SingleProduct.scss';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { REACT_DEV_URL } from '../../utils/api';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../utils/Context';
const SingleProduct = () => {
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
  const [quantity, setQuantity] = useState(1);
  const { handleToCart } = useContext(Context);
  const increment = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrement = () => {
    setQuantity((prev) => {
      if (prev === 1) {
        return 1;
      }
      return prev - 1;
    });
  };
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
  const { id } = useParams();
  const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`);

  if (!data) return;
  const product = data.data[0].attributes;

  return (
    <main className="main-section">
      <div className="single-product-main-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <figure className="left">
                <img
                  src={REACT_DEV_URL + product?.img?.data[0]?.attributes?.url}
                  alt={product?.title}
                />
              </figure>
            </div>
            <div className="col-12 col-lg-6">
              <div className="right">
                <h3 className="name">{product?.title}</h3>
                <span className="price">₹{product?.price}</span>
                <p className="desc">{product?.description}</p>
                <div className="cart-buttons">
                  <div className="quantity-buttons">
                    <button onClick={decrement}>-</button>
                    <span>{quantity}</span>
                    <button onClick={increment}>+</button>
                  </div>
                  <button
                    className="add-to-cart-button"
                    onClick={() => {
                      handleToCart(data.data[0], quantity);
                      setQuantity(1);
                    }}>
                    <FaCartPlus size={20} />
                    Add to cart
                  </button>
                </div>
                <span className="divider" />
                <div className="info-item">
                  <div className="text-bold">
                    Category:{' '}
                    <span>
                      {product?.categories?.data[0]?.attributes?.title}
                    </span>
                  </div>
                  <div className="text-bold">
                    Share:{' '}
                    <div className="socials">
                      <Link to="">
                        {' '}
                        <FaFacebookF size={16} />
                      </Link>
                      <Link to="">
                        {' '}
                        <FaInstagram size={16} />
                      </Link>
                      <Link to="">
                        <FaTwitter size={16} />
                      </Link>

                      <Link to="">
                        {' '}
                        <FaLinkedinIn size={16} />
                      </Link>
                      <Link to="">
                        <FaPinterest size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="layout">
          <div className="single-product-page"></div>
          <RelatedProducts
            productId={id}
            categoryId={product.categories.data[0].id}
          />
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
