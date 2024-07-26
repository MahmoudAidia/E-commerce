import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../Store/cartReducer";
import { Fragment } from "react";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const isDollar = useSelector((state) => state.money.isDollar);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart">
      {products.length === 0 ? (
        <div className="empty">Your cart is empty right now</div>
      ) : (
        <Fragment>
          <h1>Products in your cart</h1>
          {products?.map((item) => (
            <div className="item" key={item.id}>
              <img
                src={import.meta.env.VITE_REACT_APP_UP_URL + item.img}
                alt=""
              />
              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">
                  {item.quantity} x{" "}
                  {isDollar ? item.price + "$" : item.price * 50 + "LE"}
                </div>
              </div>
              <DeleteOutlinedIcon
                className="delete"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          ))}

          <div className="total">
            <p>SubTotal</p>
            <p>{isDollar ? totalPrice() + "$" : totalPrice() * 50 + "LE"}</p>
          </div>

          <button>PROCEED TO CHECKOUT</button>
          <p className="reset" onClick={() => dispatch(resetCart())}>
            Clear Cart
          </p>
        </Fragment>
      )}
    </div>
  );
}

export default Cart;
