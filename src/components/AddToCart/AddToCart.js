import { useContext, useState } from "react";
import { AppContext } from "../../App";
import "./AddToCart.css";
import Notification from "../Notification/Notification";


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

  return (
    <div className="AddToCart">
      <button onClick={onAddtoClick} className="buy">
        buy
      </button>
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
