import logo from './logo.svg';
import './App.css';
import login from './login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         {login}
        </p>
        
      </header>
    </div>
  );
}

export default App;
