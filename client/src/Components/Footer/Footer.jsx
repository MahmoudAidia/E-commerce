import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Page</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            molestiae saepe atque est veritatis. Consectetur, et tempora
            voluptatibus, ad temporibus nisi praesentium expedita obcaecati,
            laudantium quasi nostrum magni blanditiis repellat
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            molestiae saepe atque est veritatis. Consectetur, et tempora
            voluptatibus, ad temporibus nisi praesentium expedita obcaecati,
            laudantium quasi nostrum magni blanditiis repellat
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Aidia Store</span>
          <span className="copyright">
            &copy;Copyright @2024. All right reserved
          </span>
        </div>

        <div className="right">
          <img src="/public/img/payment.png" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
