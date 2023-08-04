import Products from '../Products/Products';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import './Home.scss';
const Home = () => {
  return (
    <main className="main-section">
      <Banner />
    <Category />
    <div className="container">
    <Products   headingText="Popular Products" />
    </div>
    </main>
  );
};

export default Home;
