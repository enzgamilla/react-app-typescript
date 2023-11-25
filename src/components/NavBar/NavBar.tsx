interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>Cart: {cartItemsCount}</div>;
};

export default NavBar;
