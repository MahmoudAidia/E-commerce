import { Link } from "react-router-dom";
import "./Card.scss";
import { useSelector } from "react-redux";
function Card({ item }) {
  const isDollar = useSelector((state) => state.money.isDollar);
  const oldPrice = item?.attributes.oldPrice;
  const price = item?.attributes.price;

  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={
              import.meta.env.VITE_REACT_APP_UP_URL +
              item?.attributes?.img?.data?.attributes?.url
            }
            className="mainImg"
            alt=""
          />
          <img
            src={
              import.meta.env.VITE_REACT_APP_UP_URL +
              item?.attributes?.img2?.data?.attributes?.url
            }
            className="secondImg"
            alt=""
          />
        </div>
        <h2>{item?.attributes.title}</h2>
        <div className="prices">
          <h3>
            {isDollar
              ? (oldPrice || price + 20) + "$"
              : (oldPrice || price + 20) * 50 + "LE"}
          </h3>
          <h3>{isDollar ? price + "$" : price * 50 + "LE"}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
