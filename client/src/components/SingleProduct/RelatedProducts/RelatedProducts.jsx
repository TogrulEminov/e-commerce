import { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import Products from '../../Products/Products';

const RelatedProducts = ({productId,categoryId}) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    }, []);
  }, []);
  const { data } = useFetch(
    `/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`
  );
  return (
    <div className="related-products">
      <div className="container">
        <Products headingText="Related Products" products={data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
