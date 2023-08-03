import './Header.scss';
import { TbSearch } from 'react-icons/tb';
import { CgShoppingCart } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import Search from './Search/Search';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import { Context } from '../../utils/Context';
import { useEffect, useState } from 'react';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCard, setShowCard] = useState(false);

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
      <div className="container-fluid">
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
            <TbSearch />
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=>setShowCard(true)}>
              <CgShoppingCart />
              <span>5</span>
            </span>
          </div>
        </nav>
      </div>
    </header>
    {showCard && <Cart  setShowCard={setShowCard}/>}
  </>
  );
};

export default Header;
