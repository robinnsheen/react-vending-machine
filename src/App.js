import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter} from "react-router-dom";
import VendingMachine from './VendingMachine';
// import VendingMachine from "./VendingMachine";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <VendingMachine />
      </BrowserRouter>

    </div>
  );
}

export default App;
