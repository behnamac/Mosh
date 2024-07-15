
interface Props {
  products: string[];
  onClearHandler:()=>void
}
const Cart = ({ products,onClearHandler }: Props) => {
  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product}>{product}</li>
        ))}
      </ul>
      <button onClick={onClearHandler}>clear</button>

    </>
  );
};

export default Cart;
