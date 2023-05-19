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

  

}
