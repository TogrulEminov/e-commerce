import './Category.scss';
import { Link } from 'react-router-dom';
import { REACT_DEV_URL } from '../../../utils/api';
const Category = ({categories}) => {
  return (
    <div className="shop-by-category">
      <div className="container">
        <div className="row">
          {categories?.data?.map((item) => (
            <Link to={`/category/${item.id}`} key={item.id} className="col-12 col-lg-3 col-md-6 col-sm-6">
              <div className="category">
                <img
                  src={REACT_DEV_URL + item?.attributes?.img?.data?.attributes?.url}
                  alt={item?.attributes?.title}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
