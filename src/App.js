import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import DrawingBoard from './Components/DrawingBoard';
import Object from './Components/Test.js';
import {Route, Routes} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Object />}/>
        <Route path='/Drawing' element={<DrawingBoard />}/>
      </Routes>
    </div>
  );
}

export default App;
