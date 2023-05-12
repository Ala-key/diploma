import { useContext, useState } from "react";
import { AppContext } from "../../App";
import "./AddToCart.css"
import Notification from "../Notification/Notification";
import { useNavigate } from "react-router";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [display, setDisplay] = useState("none");


  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);
  const navigate = useNavigate();


  function onAddtoClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    console.log(qty);
    setCart({ ...cart, [product.id]: qty });
    setDisplay("flex");
    setTimeout(onHideNotification, 2000);
  }


 
}
