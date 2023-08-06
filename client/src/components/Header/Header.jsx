import './Header.scss';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import Search from './Search/Search';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../utils/Context';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { cartCount } = useContext(Context);
  const handleScroll = () => {
    const offSet = window.scrollY;
    if (offSet > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <header className={`main-header ${scrolled ? 'sticky-header' : ''} `}>
        <div className="container">
          <nav className="header-content">
            <ul className="left">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                {' '}
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
            <div className="center">JSDEVSTORE.</div>
            <div className="right">
              <TbSearch onClick={() => setShowSearch(true)} />
              <AiOutlineHeart />
              <span className="cart-icon" onClick={() => setShowCard(true)}>
                <CgShoppingCart />
               {!!cartCount &&  <span>{cartCount}</span>}
              </span>
            </div>
          </nav>
        </div>
      </header>
      {showCard && <Cart setShowCard={setShowCard} />}
      {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
  );
};

export default Header;
