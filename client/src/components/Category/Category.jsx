import Products from '../Products/Products';
import { useParams } from 'react-router-dom';
import './Category.scss';
import useFetch from '../../hooks/useFetch';
const Category = () => {
  const { id } = useParams();
  const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
  );
  return (
    <main className="main-section">
      <div className="category-main-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="category-title">
                {
                  data?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes
                    ?.title
                }
              </h3>
            </div>
          </div>
          <Products innerPage={true} products={data} />
        </div>
      </div>
    </main>
  );
};

export default Category;
