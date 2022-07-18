import { Link } from "react-router-dom";

/** VendingMachine : renders Vending Machine component
 *  has routes to different food components
 *
 *  App - > VendingMachine -> { Chips, Soda, Sardines }
 */

function VendingMachine() {
  return (
    <div>
      <h1> Welcome to our Vending Machine website!!</h1>
      <nav className="NavBar">
        <Link to="/food/chips">Chips</Link>
        <Link to="/food/soda">Soda</Link>
        <Link to="/food/sardines">Sardines</Link>
      </nav>
    </div>
  );
}

export default VendingMachine;
