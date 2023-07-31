import './Footer.scss';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-6">
            <div className="footer-content">
              <h3 className="title">About</h3>
              <p className="text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, facilis dolor aperiam quis totam eligendi cumque
                suscipit quas, vitae neque dignissimos veniam ipsa autem quo
                facere, quidem itaque amet. Explicabo!
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="footer-content">
              <h3 className="title">Contact</h3>
              <div className="c-item">
                <FaLocationArrow />
                <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </div>
              </div>{' '}
              <div className="c-item">
                <FaMobileAlt />
                <div className="text">Phone:+994 55 262 40 37</div>
              </div>{' '}
              <div className="c-item">
                <FaEnvelope />
                <div className="text">Email:togrul40@mail.ru</div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="footer-content">
              <h3 className="title">Categories</h3>
              <ul className="footer-list">
                <li>
                  {' '}
                  <Link to="/" className="text">
                    Headphones
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link to="/" className="text">
                    Smart Watches
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link to="/" className="text">
                    Bluetooth Speakers
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link to="/" className="text">
                    Wireless Earbuds
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link to="/" className="text">
                    Home Theatre
                  </Link>
                </li>
                <li>
                  {' '}
                  <Link to="/" className="text">
                    Projectors
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="footer-content">
              <h3 className="title">Pages</h3>
              <Link to="/" className="text">
                Home
              </Link>
              <Link to="/" className="text">
                About
              </Link>
              <Link to="/" className="text">
                Privacy Policy
              </Link>
              <Link to="/" className="text">
                Returns
              </Link>
              <Link to="/" className="text">
                Terms and Conditions
              </Link>
              <Link to="/" className="text">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="row">
            <div className="col-12 col-lg-6">
              <article className="text">
                <p>© Copyright ©2023 All rights reserved</p>
              </article>
            </div>
            <div className="col-12 col-lg-6">
              <figure className="payment-img">
                <img src={Payment} alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
