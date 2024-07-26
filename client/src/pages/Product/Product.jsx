import { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Store/cartReducer";
import { addToWishList } from "../../Store/wishReducer";
import useFetch from "/src/hooks/useFetch.js";

import { AddShoppingCart } from "@mui/icons-material";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import { BalanceOutlined } from "@mui/icons-material";

import "./Product.scss";

function Product() {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  const isDollar = useSelector((state) => state.money.isDollar);
  const dispatch = useDispatch();
  const price = data?.attributes?.price;
  return (
    <div className="product">
      {loading || data.length === 0 ? (
        "loading"
      ) : (
        <Fragment>
          <div className="left">
            <div className="images">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UP_URL +
                  data?.attributes?.img?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img")}
              />
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UP_URL +
                  data?.attributes?.img2?.data?.attributes?.url
                }
                alt=""
                onClick={() => setSelectedImg("img2")}
              />
            </div>

            <div className="mainImg">
              <img
                src={
                  import.meta.env.VITE_REACT_APP_UP_URL +
                  data?.attributes[selectedImg]?.data?.attributes?.url
                }
                alt=""
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">
              {isDollar ? price + "$" : price * 50 + "LE"}
            </span>
            <p>{data?.attributes?.desc}</p>
            <div className="quantity">
              <button
                onClick={() => setQuantity((prev) => (prev === 1 ? 1 : --prev))}
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => ++prev)}>+</button>
            </div>
            <button
              className="add"
              onClick={() =>
                dispatch(
                  addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    img: data.attributes.img.data.attributes.url,
                    quantity,
                  })
                )
              }
            >
              <AddShoppingCart /> ADD TO CART
            </button>

            <div className="links">
              <div
                className="item wishBtn"
                onClick={() =>
                  dispatch(
                    addToWishList({
                      id: data.id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      price: data.attributes.price,
                      img: data.attributes.img.data.attributes.url,
                      quantity,
                    })
                  )
                }
              >
                <FavoriteBorderOutlined /> ADD TO WISH LIST
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
        </Fragment>
      )}
    </div>
  );
}

export default Product;
