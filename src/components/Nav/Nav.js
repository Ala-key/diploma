import { NavLink } from "react-router-dom";
import "./Nav.css"

export default function Nav(params) {
  return (
    <nav className="Nav">
      <ul>
        <li className="NavItem">
          {/* <li><a href="./home.html">Home</a></li> */}
          <NavLink to="/">Home</NavLink>
        </li>

        {/* <li><a href="./about.html">About</a></li> */}
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>

        {/* <li><a href="./contacts.html">Contacts</a></li> */}
        <li className="NavItem">
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        {/* <li><a href="./delivery.html">Delivery</a></li> */}
        <li className="NavItem">
          <NavLink to="/delivery">Delivery</NavLink>
        </li>
      </ul>
    </nav>
  )
}