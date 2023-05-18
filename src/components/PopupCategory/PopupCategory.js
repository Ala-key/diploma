import "./PopupCategory.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";



export function PopupCategory() {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const [heightState, setHeightState] = useState(100);

  function handleMouseMove(event) {

    console.log("Hello");

    const x = event.clientX;
    const y = event.clientY;


      setHeightState((prev) => prev - 1);
      console.log(heightState);
      const popup = document.querySelector(".PopupCategory");
      popup.style.height = heightState + "vh";


    setCoordinates({ x, y });
  }


  return (
    <div className="PopupCategory" onTouchMove={handleMouseMove}  >
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
      <button  id="open-garage-door" >Click me X - {coordinates.x}  Y - {coordinates.y}</button>

    </div>
  )
}