import { NavLink } from "react-router-dom"
import logo from "../assets/b-logo.png"



export default function Logo() {
  return (
    <div className="Logo">
      <NavLink to="/">
          <img src={logo} alt="logo" id="logo" />
      </NavLink>
    </div>
  )
}