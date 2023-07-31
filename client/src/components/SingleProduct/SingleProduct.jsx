import RelatedProducts from './RelatedProducts/RelatedProducts';
import './SingleProduct.scss';
import prod from '../../assets/products/earbuds-prod-1.webp';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaCartPlus,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SingleProduct = () => {
  return (
    <main className="main-section">
      <div className="single-product-main-content">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <figure className="left">
                <img src={prod} alt="" />
              </figure>
            </div>
            <div className="col-12 col-lg-6">
              <div className="right">
                <h3 className="name">Product name</h3>
                <span className="price">Price</span>
                <p className="desc">Description</p>
                <div className="cart-buttons">
                  <div className="quantity-buttons">
                    <button>-</button>
                    <span>5</span>
                    <button>+</button>
                  </div>
                  <button className="add-to-cart-button">
                    <FaCartPlus size={20} />
                    Add to cart
                  </button>
                </div>
                <span className="divider" />
                <div className="info-item">
                  <div className="text-bold">
                    Category: <span>Headphones</span>
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
          <RelatedProducts />
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
