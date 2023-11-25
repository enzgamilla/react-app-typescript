interface PropCartitems {
  id: number;
  title: string;
  price: number;
}

interface Props {
  cartItems: PropCartitems[];
  handleClear: () => void;
  removeItem: (id: number) => void;
}

const CartItems = ({ cartItems, handleClear, removeItem }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul className="list-group">
        {cartItems.map((items) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={items.id}
          >
            <p>
              title: {items.title} price: {items.price}
            </p>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => removeItem(items.id)}
            ></button>
          </li>
        ))}
      </ul>
      <button className="btn btn-outline-secondary" onClick={handleClear}>
        Clear
      </button>
    </>
  );
};

export default CartItems;
