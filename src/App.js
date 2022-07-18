import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import { Navigate, Route, Routes } from "react-router-dom";

/** App : main app with browser route
 *
 *
 * App -> VendingMachine -> { chips, soda, sardines }
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/food/chips" element={<Chips />} />
          <Route path="/food/soda" element={<Soda />} />
          <Route path="/food/sardines" element={<Sardines />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
