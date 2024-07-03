import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/public/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>

          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
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
            AidiaStore
          </Link>
        </div>

        <div className="right">
          <div className="item">
            <Link className="linkNav" to="/">
              Homepage
            </Link>
          </div>{" "}
          <div className="item">
            <Link className="linkNav" to="/">
              About
            </Link>
          </div>{" "}
          <div className="item">
            <Link className="linkNav" to="/">
              Contact
            </Link>
          </div>{" "}
          <div className="item">
            <Link className="linkNav" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderIcon />
            <div className="cartIcon">
              <ShoppingCartIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
