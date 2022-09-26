import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

 function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> | <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
}

export default Navbar;