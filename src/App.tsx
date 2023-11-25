import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import { produce } from "immer";
import NavBar from "./components/NavBar";
import CartItems from "./components/CartItems";

function App() {
  // const listOfState = [
  //   "Abu Dhabi",
  //   "Dubai",
  //   "Sharjah",
  //   "Ajman",
  //   "Umm Al Quwain",
  //   "Ras Al Khaima",
  //   "Fujairah",
  //   "Al Ain",
  // ];

  // const [show, setShow] = useState(false);

  // function handleClick() {
  //   console.log(show);

  //   return show ? false : true;
  // }

  //handle Objects
  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: "Street 21"
  // });
  // const handleClick = () => {
  //   setCustomer({
  //     ...customer,
  //     address: "Street 22"
  //   });
  //   console.log(customer);
  // };

  //handle nested Objects
  // const [customer, setCustomer] = useState({
  //   name: "John",
  //   address: {
  //     city: "San Francisco",
  //     zipCode: 94111,
  //   },
  // });
  // const handleClick = () => {
  //   setCustomer({
  //     ...customer,
  //     address: { ...customer.address, zipCode: 92345 },
  //   });
  //   console.log(customer);
  // };

  //handle Arrays
  // const [numbers, setNumbers] = useState([1, 2, 3]);
  // const handleClick = () => {
  //   //add
  //   setNumbers([...numbers, 4]);
  //   //Remove 1 or any values in array
  //   setNumbers(numbers.filter(number => number !== 1));
  //   //update
  //   setNumbers(numbers.map(number => number === 1 ? 5: number))
  // }

  //handle Array of Objects
  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "Bug 1", fixed: false },
  //   { id: 2, title: "Bug 2", fixed: false },
  // ]);
  // const handleClick = () => {

  //normal
  //   // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

  //   //with immer library
  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.id === 2);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  // };

  const [cart, setCart] = useState([
    { id: 1, title: "Product 1", price: 43 },
    { id: 2, title: "Product 2", price: 44 },
    { id: 3, title: "Product 3", price: 46 },
  ]);

  const handleOnClear = () => {
    setCart([]);
  };

  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      {/* <ListGroup listState={listOfState} />
      {show && <Alert onClick={() => setShow(handleClick())} />}
      <Button onClick={() => setShow(handleClick())}>Show Alert</Button> */}

      {/* update immer */}
      {/* {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} bug fixed: {bug.fixed ? "true" : "false"}
        </p>
      ))} */}

      {/* <Button onClick={handleClick}>update me</Button> */}
      <NavBar cartItemsCount={cart.length} />
      <CartItems
        cartItems={cart}
        handleClear={handleOnClear}
        removeItem={(id: number) => handleRemoveItem(id)}
      />
    </div>
  );
}

export default App;
