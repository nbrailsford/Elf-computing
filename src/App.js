import React from "react";
import Header from "./Header/Header";
import Customize from "./customize/Customize";
import Cart from "./cart/Cart";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Customize flexBasis="2" />
        <Cart flexBasis="1" />
      </div>
    </div>
  );
}

export default App;
