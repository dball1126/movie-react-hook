import React from 'react';
import logo from './logo.svg';
import '../src/App.css';
import Movie from './Movie';
import Search from './Search';

function App() {
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const [errorMessage, setErrorMessage] = useState(null);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
