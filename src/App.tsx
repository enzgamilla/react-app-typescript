import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const listOfState = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah",
    "Ajman",
    "Umm Al Quwain",
    "Ras Al Khaima",
    "Fujairah",
    "Al Ain",
  ];

  const [show, setShow] = useState(true);

  function handleClick() {
    return show ? false : true;
  }

  return (
    <div className="container">
      <ListGroup listState={listOfState} />
      {!show && <Alert onClick={() => setShow(handleClick())} />}
      <Button onClick={() => setShow(handleClick())}>Show Alert</Button>
    </div>
  );
}

export default App;
