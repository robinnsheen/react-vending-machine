import React from "react";
import { Link } from "react-router-dom";

/** Chips: renders simple chips component w/ go back button
 *
 *
 * App -> chips
 *
 */
function Chips() {
  return (
    <div>
      <h1>Chips Page</h1>
      <Link to="/"> Go Back </Link>
    </div>
  );
}

export default Chips;
