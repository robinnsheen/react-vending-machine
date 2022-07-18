import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/food/chips">
        Chips
      </Link>
      <Link to="/food/soda">
        Soda
      </Link>
      <Link to="/food/sardines">
        Sardines
      </Link>
    </nav>
  );
}

export default NavBar;