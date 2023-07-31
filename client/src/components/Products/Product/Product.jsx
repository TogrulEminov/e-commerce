import './Product.scss';
import { Link } from 'react-router-dom';
import prod from '../../../assets/products/earbuds-prod-1.webp';
const Product = () => {
  return (
    <div className="col-12 col-lg-4 col-md-6 col-sm-6">
      <div className="product-card">
        <Link to="/ " className="thumbnail">
          <img src={prod} alt="" />
        </Link>
        <div className="prod-details">
          <h3 className="name">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque,
            inventore?
          </h3>
          <span className="price">₼ 499</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
