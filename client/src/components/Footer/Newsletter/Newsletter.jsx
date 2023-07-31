import './Newsletter.scss';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="newsletter-content">
              <span className="small-text">Newsletter</span>
              <span className="big-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <form className="form">
                <input type="email" name="" id="" placeholder="Email Adress" />
                <button>Subscribe</button>
              </form>
              <div className="text">
                Will be used in accordance with our Privacy Policy
              </div>
              <ul className="social-icons">
                <li className="icon">
                  <Link to="">
                    {' '}
                    <FaFacebookF size={14} />
                  </Link>
                </li>
                <li className="icon">
                  <Link to="">
                    <FaTwitter size={14} />{' '}
                  </Link>
                </li>
                <li className="icon">
                  {' '}
                  <Link to="">
                    <FaInstagram size={14} />{' '}
                  </Link>
                </li>
                <li className="icon">
                  <Link to="">
                    <FaLinkedinIn size={14} />{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
