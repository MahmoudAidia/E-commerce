// React hooks
import { useState } from "react";
import { Link } from "react-router-dom";

// Redux
import { toggle } from "../../Store/moneyReducer";
import { useDispatch, useSelector } from "react-redux";

// MU Icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { MenuOutlined } from "@mui/icons-material";

// Components
import Modal from "../../UI/Modal/Modal";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import PhoneNav from "../PhoneMenu/PhoneNav";

// Scss Styling
import "./Navbar.scss";

function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openWishList, setOpenWishList] = useState(false);
  const [openCurrencyList, setOpenCurrencyList] = useState(false);
  const [openPhoneNav, setOpenPhoneNav] = useState(false);

  const numProducts = useSelector((state) => state.cart.products.length);
  const isDollar = useSelector((state) => state.money.isDollar);
  const numWishes = useSelector((state) => state.wishList.wishes.length);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/public/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div
            className="item money"
            onClick={() => setOpenCurrencyList((prev) => !prev)}
          >
            <button className="moneyBtn"> {isDollar ? "USD" : "EGP"} </button>
            <KeyboardArrowDownIcon />

            {openCurrencyList && (
              <div className="currencyList">
                <p onClick={() => dispatch(toggle(true))}>USD</p>
                <p onClick={() => dispatch(toggle(false))}>EGP</p>
              </div>
            )}
          </div>

          <div className="item">
            <Link className="linkNav" to="/products/1">
              Women
            </Link>
          </div>

          <div className="item">
            <Link className="linkNav" to="/products/2">
              Men
            </Link>
          </div>

          <div className="item">
            <Link className="linkNav" to="/products/3">
              Children
            </Link>
          </div>
        </div>

        <div className="center">
          <Link className="linkNav" to="/">
            Cloths Store
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="linkNav" to="/">
              Home
            </Link>
          </div>{" "}
          <div className="item">
            <Link className="linkNav" to="/contact">
              Contact
            </Link>
          </div>{" "}
          <div className="icons">
            {openWishList && (
              <Modal setOpen={setOpenWishList}>
                <WishList setOpenWishList={setOpenWishList} />
              </Modal>
            )}

            {openCart && (
              <Modal setOpen={setOpenCart}>
                <Cart />
              </Modal>
            )}
            <SearchIcon />
            <div className="wishIcon">
              <FavoriteBorderIcon
                onClick={() => {
                  setOpenWishList((prev) => !prev);
                  setOpenCart(false);
                }}
              />
              <span>{numWishes}</span>
            </div>
            <div
              className="cartIcon"
              onClick={() => {
                setOpenCart(true);
              }}
            >
              <ShoppingCartIcon />
              <span>{numProducts}</span>
            </div>
          </div>
        </div>

        <div className="menuList">
          {openWishList && (
            <Modal setOpen={setOpenWishList}>
              <WishList setOpenWishList={setOpenWishList} />
            </Modal>
          )}

          {openCart && (
            <Modal setOpen={setOpenCart}>
              <Cart />
            </Modal>
          )}
          <div
            className="cartIcon"
            onClick={() => {
              setOpenCart(true);
            }}
          >
            <ShoppingCartIcon />
            <span>{numProducts}</span>
          </div>

          <div className="wishIcon">
            <FavoriteBorderIcon
              onClick={() => {
                setOpenWishList(true);
                setOpenCart(false);
              }}
            />
            <span>{numWishes}</span>
          </div>

          <MenuOutlined
            className="menu"
            onClick={() => {
              setOpenPhoneNav(true);
            }}
          />
        </div>
      </div>

      {openPhoneNav && (
        <Modal setOpen={setOpenPhoneNav}>
          <PhoneNav setOpen={setOpenPhoneNav} />
        </Modal>
      )}
    </div>
  );
}

export default Navbar;
