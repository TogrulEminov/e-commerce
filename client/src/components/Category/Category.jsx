import Products from '../Products/Products';
import './Category.scss';
const Category = () => {
  return (
    <div className="category-main-content">
      <div className="container">
        <h3 className="category-title">Category title</h3>
        <Products innerPage={true} />
      </div>
    </div>
  );
};

export default Category;
