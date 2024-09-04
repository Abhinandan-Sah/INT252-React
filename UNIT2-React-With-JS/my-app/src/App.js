import logo from './logo.svg';
import './App.css';
import Never from './components/Never';
import Car from './components/Car';
import Carlist from './components/Carlist';
import MovieList from './components/MovieList';



function App() {
  let name = "avi"
  const x= 24
  const movies = [
    {title: "The maze runner", genra: "sci-fric action advendure"},
    {title: "The maze runner 2", genra: "sci-fric action advendure"},
    {title: "The maze runner 3", genra: "sci-fric action advendure"},
]
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
        <MovieList />
      </header>
    </div>
  );
}

export default App;
