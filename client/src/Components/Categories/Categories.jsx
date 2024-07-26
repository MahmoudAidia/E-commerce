import { Link } from "react-router-dom";
import "./Categories.scss";

function Categories() {
  return (
    <>
      <h2 className="categoryTitle">Categories</h2>
      <div className="categories">
        <div className="col">
          <div className="row">
            <img src="/public/img/stylish--6.jpg" />
            <button>
              <Link className="link" to="products/1">
                Sale
              </Link>
            </button>
          </div>
          <div className="row">
            <img src="/public/img/stylish--1.jpg" />
            <button>
              <Link className="link" to="products/1">
                Women
              </Link>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <img src="/public/img/stylish--3.jpg" />
            <button>
              <Link className="link" to="products/1">
                Accessories
              </Link>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img src="/public/img/stylish--4.jpg" />
                <button>
                  <Link className="link" to="products/1">
                    New Season
                  </Link>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                {" "}
                <img src="/public/img/stylish--5.jpg" />
                <button>
                  <Link className="link" to="products/2">
                    Men
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img src="/public/img/stylish--2.jpg" />
            <button>
              <Link className="link" to="products/1">
                Shoes
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
