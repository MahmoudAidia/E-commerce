import Card from "../Card/Card";

function List() {
  const data = [];
  return (
    <ul className="list">
      {data?.map((item) => (
        <Card key={item.key} item={item} />
      ))}
    </ul>
  );
}

export default List;
