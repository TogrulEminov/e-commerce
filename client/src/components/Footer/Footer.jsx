import './Footer.scss';
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from 'react-icons/fa';
import Payment from '../../assets/payments.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis, facilis dolor aperiam quis totam eligendi cumque
            suscipit quas, vitae neque dignissimos veniam ipsa autem quo facere,
            quidem itaque amet. Explicabo!
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
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
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms and Conditions</span>
          <span className="text">Contact us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Copyright ©2023 All rights reserved</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
