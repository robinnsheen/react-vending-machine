import { Navigate, Route, Routes } from "react-router-dom";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Home from "./Home";

function VendingMachine() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/food/chips" element={<Chips />} />
      <Route path="/food/soda" element={<Soda />} />
      <Route path="/food/sardines" element={<Sardines />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default VendingMachine;