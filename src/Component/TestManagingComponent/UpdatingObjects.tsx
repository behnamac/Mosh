import { useState } from "react";
import { Immer, produce } from "immer";

const UpdatingObjects = () => {
  //#region object variable
  const [coffee, setCoffee] = useState({
    price: 5,
    type: "Mocha",
  });

  const coffeeMessage = () => {
    const newCoffee = { ...coffee, price: 8 };
    setCoffee(coffee);
    console.log(newCoffee.type);
  };
  //#endregion

  //#region object, inside a object
  const [info, SetInfo] = useState({
    customerName: "Ben",
    address: {
      postalCode: 2533,
      city: "Utrecht",
    },
  });
  const customerMessage = () => {
    const newCustomer = {
      ...info,
      address: { ...info.address, postalCode: 5151151 },
    };
    console.log(
      newCustomer.customerName,
      " ",
      newCustomer.address.postalCode,
      " ",
      newCustomer.address.city
    );
  };
  //#endregion

  //#region arrays
  useState();
  const [mode, setMode] = useState(["Happy", "Sad", "Angry", "Worry"]);

  const ModeMessage = () => {
    //add a value
    //setMode([...mode, "Crying"]);

    // remove a value
    // setMode(mode.filter((mode) => mode !== "Happy"));

    // update a value
    setMode(mode.map((mode) => (mode === "Angry" ? "Sleep" : mode)));

    console.log(mode);
  };
  //#endregion

  //#region Update a array of objects
  const [bug, setBug] = useState([
    { id: 1, title: "bug1", fixed: false },
    { id: 2, title: "bug2", fixed: false },
  ]);

  const fixingABug = () => {
    // Normal way
    // setBug(bug.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // Using immer
    setBug(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
    console.log(bug);
  };
  //#endregion

  return (
    <div>
      <button onClick={fixingABug}>click me</button>
    </div>
  );
};

export default UpdatingObjects;
