import "./Card.scss";
import { Link } from "react-router-dom";
function Card({ item }) {
  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="image">
        {item.isNew && <span>New Season</span>}
        <img src={item.img} className="mainImg" alt="" />
        <img src={item.img2} className="secondImg" alt="" />
      </div>
      <h2>{item.title}</h2>
      <div className="prices">
        <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
      </div>
    </Link>
  );
}

export default Card;
