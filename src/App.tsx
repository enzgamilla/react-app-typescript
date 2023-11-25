import "bootstrap/dist/css/bootstrap.css";
// import ListGroup from "./components/ListGroup/ListGroup";
import Button from "./components/Button/Button";

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

  return (
    <div className="container">
      {/* <ListGroup listState={listOfState} /> */}
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
