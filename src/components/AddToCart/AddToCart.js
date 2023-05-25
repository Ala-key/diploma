import { useContext, useState } from "react";
import { AppContext } from "../../App";
import "./AddToCart.css";
import Notification from "../Notification/Notification";
import { NavLink } from "react-router-dom";


export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [display, setDisplay] = useState("none");

  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);


  function onAddtoClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    console.log(qty);
    setCart({ ...cart, [product.id]: qty });
    setDisplay("flex");
    setTimeout(() => setDisplay("none"), 2000);
  }

  function onBuytoClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    console.log(qty);
    setCart({ ...cart, [product.id]: qty });
  }

  return (
    <div className="AddToCart">
      <NavLink to="/cart">
        <button className="buy" onClick={onBuytoClick}>
          buy
        </button>
      </NavLink>
      <button onClick={onAddtoClick} className="addtocart">
        add to cart
      </button>
      <Notification
        disp={display}
        current={cart[product.id] ? cart[product.id] : 0}
        allcount={total}
        name={product.name}
      />
    </div>
  );
}
