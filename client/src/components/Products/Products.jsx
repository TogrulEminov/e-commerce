import './Products.scss';
import Product from './Product/Product';
import { useEffect } from 'react';
const Products = ({products, innerPage, headingText }) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    }, []);
  }, []);
  return (
<div className="all-products">
        {!innerPage && <div className="sec-heading">{headingText}</div>}
        <div className="row">
        {products?.data?.map((item)=>(
          <Product key={item.id}  id={item.id} data={item.attributes}/>
        ))}
        </div>
      </div>
  );
};

export default Products;
