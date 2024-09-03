import logo from './logo.svg';
import './App.css';
import Never from './components/Never';
import Car from './components/Car';



function App() {
  let name = "avi"
  const x= 24
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Never />
        <Car cost={200000000000000000000} model={"iphone16"} />
        <p>{x}{name}</p>
      </header>
    </div>
  );
}

export default App;
