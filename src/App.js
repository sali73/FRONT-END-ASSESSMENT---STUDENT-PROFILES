import React from "react";
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Home from "./Home";
import Test from "./Test";
import Details from "./Details";
import AllProd from "./AllProd";
import Cart from "./Cart";
import CartList from "./CartList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/allprod' element={<AllProd/>} />
          <Route path='/details/:id' element={<Details/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/cart-list' element={<CartList/>} />
        </Routes>
      </Router>
    </div>
  );}
export default App;
