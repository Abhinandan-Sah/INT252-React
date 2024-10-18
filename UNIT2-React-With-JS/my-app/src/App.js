import logo from "./logo.svg";
import "./App.css";
import Never from "./components/Never";
import Car from "./components/Car";
import Carlist from "./components/Carlist";
import MovieList from "./components/MovieList";
import Zoo from "./components/Zoo";
import Animal from "./components/Animal";
import ClassApple from "./components/ClassApple";
import Fruit from "./components/Fruit";
import ImageChange from "./components/ColorChangeComp";
import ColorChangeCom from "./components/ColorChangeComp";
import UserForm from "./components/UserForm";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import { useReducer } from "react";
import Table from "./components/Table";
import TableHeader from "./components/Table.jsx";

// const counterReducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       return state;
//   }
// };

// const CounterApp = () => {
//   const {count, increase, decrease, reset} = useCounter (0);
//   return (
//     <div>
//       <p>{state.count}</p>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
//     </div>
//   );
// };

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit<code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* <Never /> */}
        {/* <Car cost={200000000000000000000} model={"iphone16"} /> */}
        {/* <p>{x}{name}</p> */}
        {/* <Carlist /> */}
        {/* <MovieList /> */}
        {/* <Animal /> */}
        {/* <Zoo /> */}
        {/* <ColorChangeCom /> */}
        {/* <UserForm /> */}
        {/* <Counter2 /> */}
        {/* <CounterApp /> */}
        <TableHeader />
      </header>
    </div>
  );
}

export default App;
