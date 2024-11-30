import logo from "./logo.svg";
import "./App.css";

import WindowWidth from "./components/WindowWidth.jsx";
import Practice from "./components/Practice.jsx";
import { AuthProvider } from "./utils/AuthContext.js";
import Practice2 from "./utils/Practice2.js";
import Practice3 from "./utils/Practice3.jsx";

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
    <>
    <AuthProvider>
    <div className="App">
      <header className="App-header">
        {/* <Practice />
        <Practice2 data={12} /> */}
        <Practice3 />
      </header>
    </div>
    </AuthProvider>
    </>
  );
}

export default App;
