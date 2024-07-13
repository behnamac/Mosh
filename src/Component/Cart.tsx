import React from "react";

interface Props {
  cartItem: string[];
}

const Cart = ({ cartItem }: Props) => {
  return (
    <>
      <div>Cart:</div>
      <ul>
        {cartItem.map((cartItem) => (
          <li key={cartItem}>cartItem</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
