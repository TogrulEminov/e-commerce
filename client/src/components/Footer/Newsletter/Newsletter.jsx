import './Newsletter.scss';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </span>
        <div className="form">
          <input type="email" name="" id="" placeholder="Email Adress" />
          <button>Subscribe</button>
        </div>
        <div className="text">
          Will be used in accordance with our Privacy Policy
        </div>
        <ul className="social-icons">
          <li className='icon'>
            <FaFacebook size={14} />
          </li>
          <li className='icon'>
            <FaTwitter size={14} />
          </li>
          <li className='icon'>
            <FaInstagram size={14} />
          </li>
          <li className='icon'>
            <FaLinkedinIn size={14} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Newsletter;
