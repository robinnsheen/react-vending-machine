import React from "react";
import { Link } from "react-router-dom";

/** Sardines: renders simple Sardines component w/ go back button
 *
 *
 * App -> VendingMachine -> Sardines
 *
 */

function Sardines() {
  return (
    <div>
      <h1>Sardines Page</h1>
      <Link to="/"> Go Back </Link>
    </div>
  );
}

export default Sardines;
