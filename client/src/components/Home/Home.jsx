import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import './Home.scss';
const Home = () => {
  return (
    <main className="main-section">
      <Banner />
      <Category />
      <Products   headingText="Popular Products" />
    </main>
  );
};

export default Home;
