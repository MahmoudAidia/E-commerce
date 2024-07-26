import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";

import "./PhoneNav.scss";
const nav = [
  { id: 1, text: "Home", link: "/", icon: <HomeIcon /> },
  { id: 2, text: "Men", link: "products/1", icon: <ManIcon /> },
  { id: 3, text: "Women", link: "products/2", icon: <WomanIcon /> },
  { id: 4, text: "Children", link: "products/3", icon: <ChildFriendlyIcon /> },
];

function PhoneNav({ setOpen }) {
  return (
    <div className="phoneNav">
      <div>
        <h2>Welcome</h2>
        <CloseIcon onClick={() => setOpen(false)} />
      </div>
      <ul>
        {nav.map((item) => (
          <li key={item.id} onClick={() => setOpen(false)}>
            <Link to={item.link}>
              <span>{item.icon}</span>
              <span> {item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneNav;
