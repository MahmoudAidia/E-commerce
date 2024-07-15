import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./List.scss";

function List({ subCats, maxPrice, sort, catId }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );
  return (
    <ul className="list">
      {loading
        ? "loading... "
        : data?.map((item) => <Card key={item.id} item={item} />)}
    </ul>
  );
}

export default List;
