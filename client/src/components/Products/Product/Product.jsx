import './Product.scss';
import { Link } from 'react-router-dom';
import { REACT_DEV_URL } from '../../../utils/api';
import { useEffect } from 'react';
const Product = ({id,data}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    }, []);
  }, []);
  return (
    <div className="col-12 col-lg-3 col-md-4 col-sm-6">
      <div className="product-card">
        <Link to={`/product/${id}`} className="thumbnail" key={id}>
          <img src={REACT_DEV_URL +data.img?.data[0]?.attributes?.url} alt={data?.title} />
        </Link>
        <div className="prod-details">
          <h3 className="name">
          {data?.title}
          </h3>
          <span className="price">&#8377;{data?.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
