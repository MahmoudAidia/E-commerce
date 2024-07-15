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
            Welcome to Cloths Store, your number one source for all things
            fashion. We're dedicated to giving you the very best of Clothings ,
            with a focus on quality, customer service, and uniqueness. We
            understand that shopping online can sometimes be challenging, which
            is why we've made it our mission to provide a seamless and enjoyable
            shopping experience.
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
          <span className="logo">Cloth Store</span>
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
