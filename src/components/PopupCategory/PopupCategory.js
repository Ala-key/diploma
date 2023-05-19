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


    setTranslateState((prev) => prev + 1);


    const popup = document.querySelector(".PopupCategory");

    popup.style.transition = "transform 0s ease-out 0s";


    if (translateState >= 90 && translateState <= 115) {
      document.body.style.position = "static";
      popup.style.transform = "";
      popup.style.transition = "2s ease-out 0s";
      toggleFalse();
      setTranslateState(0);
      return;
    }

    popup.style.transform = `translateY(-${translateState}vh)`;

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
