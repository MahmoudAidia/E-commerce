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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
          tempora. Atque repudiandae nemo saepe cumque optio assumenda
          exercitationem earum distinctio, deleniti magnam debitis nam odit aut?
          Natus amet dolore quisquam!
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
