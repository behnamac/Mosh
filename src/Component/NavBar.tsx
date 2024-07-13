interface Props {
  countItem: number;
}

const NavBar = ({ countItem }: Props) => {
  return <div>NavBar: {countItem}</div>;
};

export default NavBar;
