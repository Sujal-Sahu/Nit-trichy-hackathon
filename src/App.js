import logo from './logo.svg';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div className="App">
       <Router>
     <Routes>
         <Route exact path="/" element = {<Home/>}></Route>
         <Route exact path="/login" element = {<Login/>}></Route>
         <Route exact path="/signup" element = {<Signup/>}></Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
