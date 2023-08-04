import Products from "../Products/Products";
import "./Category.scss";
const Category = () => {
  return (
    <main className="main-section">
      <div className="category-main-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="category-title">Category title</h3>
            </div>
          </div>
          <Products innerPage={true} />
        </div>
      </div>
    </main>
  );
};

export default Category;
