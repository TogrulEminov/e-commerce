import './Products.scss';
import Product from './Product/Product';
const Products = ({ innerPage, headingText }) => {
  return (
    <div className="all-products">
      <div className="container">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="row">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Products;
