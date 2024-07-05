import ListGroup from "./Component/ListGroup";
const App = () => {
  let items = ["Spain", "Germany", "France", "Norway"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <ListGroup items={items} title="cities" onSelected={handleSelectItem} />
  );
};

export default App;
