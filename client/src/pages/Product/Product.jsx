import { useState } from "react";

import { AddShoppingCart } from "@mui/icons-material";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { BalanceOutlined } from "@mui/icons-material";

import "./Product.scss";

function Product() {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => selectedImg(1)} />
        </div>

        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">1199$</span>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          molestiae saepe atque est veritatis. Consectetur, et tempora
          voluptatibus, ad temporibus nisi praesentium expedita obcaecati,
          laudantium quasi nostrum magni blanditiis repellat
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : --prev))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => ++prev)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCart /> ADD TO CART
        </button>

        <div className="links">
          <div className="item">
            <FavoriteBorderOutlined /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceOutlined /> ADD TO COMPARE
          </div>
        </div>

        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>

        <hr />

        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Product;
