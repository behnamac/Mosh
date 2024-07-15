
interface Props {
  items: number;
}
const NavBar = ({items}: Props) => {
  return (
    <>
      <div>
        <p>{items}</p>
      </div>
    </>
  );
};

export default NavBar;
