import { useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pizza",
    topping: ["MushRoom"],
  });

  const handlePizza = () => {
    setPizza({ ...pizza, topping: [...pizza.topping, "cheese"] });
  };

  return (
    <div>
      <button onClick={handlePizza}>Pizza</button>
    </div>
  );
};

export default Pizza;
