import logo from './restaurant_24px.svg';
import './App.css';
import './login.js';

function App() {
  return (
    <div className="App">
      <header className="app-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <h3>Food Restaurant</h3>
      </header>

      <div className="App-header">
        <h2>
         Welcome to the Food Kitchen
        </h2>
        <a
          className="App-link"
          href="login.html"
          target="_blank"
        
        >
          <button>GO TO MENU</button>
        </a>
      </div>
    </div>
  );
}

export default App;
