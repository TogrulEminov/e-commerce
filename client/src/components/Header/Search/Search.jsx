import './Search.scss';
import { MdClose } from 'react-icons/md';
import prod from '../../../assets/products/earbuds-prod-1.webp';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { REACT_DEV_URL } from '../../../utils/api';
const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  let { data } = useFetch(
    `/api/products?populate=*&filters[title][$contains]=${query}`
  );
  if (!query?.length) {
    data = null;
  }
  return (
    <div className="search-modal">
      <div className="container">
        <form className="form-field">
          <input
            type="text"
            autoFocus
            placeholder="Search for product"
            value={query}
            onChange={handleChange}
          />
          <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
        </form>
        <div className="search-results-content">
          <div className="search-result">
            {data?.data?.map((item) => (
              <div
                className="search-result-item"
                key={item.id}
                onClick={() => {
                  navigate('/product/' + item.id);
                  setShowSearch(false)
                }}>
                <div className="img-container">
                  <img
                    src={
                      REACT_DEV_URL +
                      item?.attributes?.img?.data[0]?.attributes?.url
                    }
                    alt={item?.title}
                  />
                </div>
                <div className="prod-details">
                  <span className="name">{item?.attributes?.title}</span>
                  <span className="desc">{item?.attributes?.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
