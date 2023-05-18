import "./PopupCategory.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";



export function PopupCategory() {
  const [tranlatestate, setTranslateState] = useState(0);



  function handleMouseMove(event) {
    document.body.style.position = "fixed";
  
    const x = event.clientX;
    const y = event.clientY;
  
    setTranslateState((prev) => prev + 1);
   

    const popup = document.querySelector(".PopupCategory");

    if(tranlatestate >= 105) {
      document.body.style.position = "static";
      return;
    }

    popup.style.transform = `translateY(-${tranlatestate}vh)`;
  
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
    </div>
  )
}