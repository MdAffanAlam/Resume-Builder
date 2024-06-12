import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

import Hero from "./assets/Hero";
import Navbar from "./assets/Navbar";
import Details from './assets/Details';
import Login from './assets/Login';
import Signup from './assets/Signup';
import About from './assets/About';
import Footer from './assets/Footer'



function App() {
  return (
    <Router> 
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/details' element={<Details/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
