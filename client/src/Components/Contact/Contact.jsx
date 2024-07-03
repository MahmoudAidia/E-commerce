import {
  Facebook,
  Google,
  Instagram,
  Pinterest,
  Twitter,
} from "@mui/icons-material";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>be in touch with us:</span>
        <div className="email">
          <input type="email" placeholder="Enter your e-mail..." />
          <button>join us</button>
        </div>
        <div className="icons">
          <Facebook />
          <Instagram />
          <Twitter />
          <Google />
          <Pinterest />
        </div>
      </div>
    </div>
  );
}

export default Contact;
