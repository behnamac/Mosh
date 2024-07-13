import Cart from "./Component/Cart";
import NavBar from "./Component/NavBar";
import { useState } from "react";

const App = () => {
  const [cartItem, setCartItem] = useState([
    "product1",
    "product2",
    "product3",
  ]);
  return (
    <>
      <NavBar countItem={cartItem.length} />
      <Cart cartItem={cartItem} />
    </>
  );
};

export default App;
