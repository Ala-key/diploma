import "./PopupCategory.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function PopupCategory({ open, toggle, toggleFalse }) {
  
  const [translateState, setTranslateState] = useState(0);



  function onClosePopup() {
     if (translateState === 0) {
      document.querySelector(".PopupCategory").classList.remove("open");
      toggle();
     }    
  }



  const handleMouseMove = () => {
    
       document.body.style.position = "fixed";

  };
  
  return (
    <div className={popupClassNames} onTouchMove={handleMouseMove}>
      <nav className="Nav">
        <ul>
          <li onClick={onClosePopup} className="NavItem">
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={onClosePopup} className="NavItem">
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={onClosePopup} className="NavItem">
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
          <li onClick={onClosePopup} className="NavItem">
            <NavLink to="/delivery">Delivery</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );

}
