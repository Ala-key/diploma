import { useContext } from "react";
import { AppContext } from "../../App"
import { NavLink } from "react-router-dom";
import {FaShoppingCart} from "react-icons/fa"


export default function CartLink() {


  return (
    <div className="CartLink">
      <NavLink to="/cart">
           <FaShoppingCart color="black"/>
      </NavLink>
    </div>
  )
}