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
}
