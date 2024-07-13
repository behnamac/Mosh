import { useState } from "react";

const Synchronies = () => {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(true);
    console.log(state);
  };

  return (
    <div>
      <button onClick={handleClick}>show</button>;
    </div>
  );
};
export default Synchronies;
