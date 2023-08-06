import { useContext, useEffect } from 'react';
import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import './Home.scss';
import { fetchDataFromApi } from '../../utils/api';
import { Context } from '../../utils/Context';
const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    }, []);
  }, []);
  const {setCategories,setProducts,categories,products}=useContext(Context)
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  const getCategories = () => {
    fetchDataFromApi('/api/categories?populate=*').then((res) =>
      setCategories(res)
    );
  };
  const getProducts = () => {
    fetchDataFromApi('/api/products?populate=*').then((res) =>
      setProducts(res)
    );
  };
  return (
    <main className="main-section">
      <Banner />
    <Category categories={categories} setCategories={setCategories} />
    <div className="container">
    <Products  products={products}  headingText="Popular Products" />
    </div>
    </main>
  );
};

export default Home;
