import { useDispatch, useSelector } from "react-redux";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { removeWish } from "/src/Store/wishReducer.js";
import "./WishList.scss";
import { resetWishList } from "../../Store/wishReducer";

function WishList({ setOpenWishList }) {
  const wishProducts = useSelector((state) => state.wishList.wishes);
  const dispatch = useDispatch();

  console.log(wishProducts);

  return (
    <div className="wishList">
      {wishProducts.length === 0 ? (
        <div className="empty">Your wish list is empty</div>
      ) : (
        <>
          <div className="top">
            <ChevronLeftIcon onClick={() => setOpenWishList(false)} />
            <p>Saved</p>
            <FavoriteIcon />
          </div>

          <div className="list">
            {wishProducts.map((item) => (
              <div key={item.id} className="wishItem">
                <div className="flex">
                  <img src={import.meta.env.VITE_REACT_APP_UP_URL + item.img} />
                  <div className="desc">
                    <h5>{item.title}</h5>
                    <p>Price: ${item.price}</p>
                    <p className="quantity">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div onClick={() => dispatch(removeWish(item.id))}>
                  <FavoriteIcon />
                </div>
              </div>
            ))}

            <button onClick={() => dispatch(resetWishList())}>Reset</button>
          </div>
        </>
      )}
    </div>
  );
}

export default WishList;
