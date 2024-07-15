import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

function FeaturedProducts({ type }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq=${type}`
  );
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Stay stylish and comfortable with our Men's Linen Shirt. Crafted from
          premium linen, this shirt offers a relaxed fit and a natural texture
          that keeps you cool in the summer heat. Perfect for both casual
          outings and more formal occasions, it pairs well with shorts or
          chinos. Available in a variety of colors and sizes S to XXL.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;
