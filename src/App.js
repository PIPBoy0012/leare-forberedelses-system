import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import DrawingBoard from './Components/DrawingBoard';
import Forloebsside from './Pages/Forloebside';
import {Route, Routes} from "react-router-dom";
import DnDFlow from './Pages/rFlowTestPage';

function App() {
  return (
    <div className="App w-full max-h-2">
      <header>
        <Navbar/>
      </header>
      <body>
        <Routes>
          <Route path='/Home' element={""}/>
          <Route path='/Drawing' element={<DrawingBoard />}/>
          <Route path='/FlowTest' element={<DnDFlow/>}/>
          <Route path='/Forløb' element={<Forloebsside />}/>
        </Routes>
      </body>
      
    </div>
  );
}

export default App;
