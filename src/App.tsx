import Button from "./Component/Button/Button";
import Like from "./Component/Like/Like";
import ListGroup from "./Component/ListGroup";
import { FaRegCalendarCheck } from "react-icons/fa";

const App = () => {
  const items = ["Germany", "England", "Sweden"];
  const onClick = () => {
    console.log("hey");
  };
  return (
    <>
      <ListGroup items={items} title="Cities"></ListGroup>
      <FaRegCalendarCheck color="red" size={100} />
      <Button onClicked={onClick}>Click Me</Button>
      <Like onClick={() => console.log("Clicked!")} />
    </>
  );
};

export default App;
