import logo from './logo.svg';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
     <Routes>
         <Route exact path="/" element = {<Home/>}></Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
