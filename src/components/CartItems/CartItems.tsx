import { useState } from "react";

interface PropCartitems {
  id: number;
  title: string;
  quantity: number;
  price: number;
}

interface Props {
  cartItems: PropCartitems[];
  handleClear: () => void;
  removeItem: (id: number) => void;
  addQuantity: (id: number) => void;
  minusQuantity: (id: number) => void;
}

const CartItems = ({
  cartItems,
  handleClear,
  removeItem,
  addQuantity,
  minusQuantity,
}: Props) => {
  const price = cartItems.map((items) => items.quantity * items.price);
  function sumPrices(item: number[]): number {
    let sum = 0;
    item.forEach((item) => {
      sum += item;
    });
    return sum;
  }

  return (
    <>
      <div>Total Price: ${sumPrices(price)}</div>
      <ul className="list-group">
        {cartItems.map((items) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={items.id}
          >
            <span>
              title: {items.title} | Price: ${items.price} | quantity:{" "}
              {items.quantity}
              <div>
                <button
                  className="btn btn-primary"
                  onClick={() => addQuantity(items.id)}
                >
                  +
                </button>
                <button
                  className={`btn btn-danger ${
                    items.quantity <= 1 ? "disabled" : ""
                  }`}
                  onClick={() => minusQuantity(items.id)}
                >
                  -
                </button>
              </div>
              | Total Price: ${items.quantity * items.price}
            </span>
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
