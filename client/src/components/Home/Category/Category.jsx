import './Category.scss';
import cart1 from '../../../assets/category/cat-1.jpg';
import cart2 from '../../../assets/category/cat-2.jpg';
import cart3 from '../../../assets/category/cat-3.jpg';
import cart4 from '../../../assets/category/cat-4.jpg';
const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-6 col-sm-6">
            <div className="category">
              <img src={cart1} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-6">
            <div className="category">
              <img src={cart2} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-6">
            <div className="category">
              <img src={cart3} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 col-sm-6">
            <div className="category">
              <img src={cart4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
