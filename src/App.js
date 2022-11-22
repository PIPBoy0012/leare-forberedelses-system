import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        

        <p>
          Under Development, Bugs may accur.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          We Use React
        </a>
      </header>
    </div>
  );
}

export default App;
