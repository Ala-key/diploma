import "./PopupCategory.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function PopupCategory({ open, toggle, toggleFalse }) {
  const [translateState, setTranslateState] = useState(0);

  console.log(open);


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

    popup.style.transition = "transform 0s ease-out 0s"

    console.log(translateState);

    if (translateState >= 60) {
      console.log(translateState);
      document.body.style.position = "static";
      popup.style.transform = "";
      popup.style.transition = "2s ease-out 0s"
      console.log(open);
      toggleFalse();
      setTranslateState(0);
      console.log(open);
      return;
    }

    popup.style.transform = `translateY(-${translateState}vh)`;
  };

  console.log(open);

  const popupClassNames = `PopupCategory ${open ? "open" : ""}`;

  console.log(popupClassNames);

  return (
    <div className={popupClassNames} onTouchMove={handleMouseMove}>
      <nav id="Nav">
        <ul>
          <li onClick={onClosePopup}  className="NavItem">
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={onClosePopup} className="NavItem">
            <NavLink to="/about">About</NavLink>
          </li>
          <li onClick={onClosePopup} className="NavItem">
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
