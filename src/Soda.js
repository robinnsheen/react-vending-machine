import React from "react";
import { Link } from "react-router-dom";

/** Soda: renders simple Soda component w/ go back button
 *
 *
 * App ->  Soda
 *
 */
function Soda() {
  return (
    <div>
      <h1>Soda Page</h1>
      <Link to="/"> Go Back </Link>
    </div>
  );
}

export default Soda;
