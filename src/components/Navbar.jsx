import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="navbar">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/contatti"}>contatti</Link>
      </li>
      <li>
        <Link to={"/about"}>about</Link>
      </li>
      <li>
        <Link to={"/cards"}>cards versione 1</Link>
      </li>
      <li>
        <Link to={"/cards-children"}>cards versione 2</Link>
      </li>
    </ul>
  );
}

export default Navbar;
