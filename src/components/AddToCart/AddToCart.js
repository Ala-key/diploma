import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { FaCartPlus } from "react-icons/fa";
import Notification from "../Notification/Notification";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [display, setDisplay] = useState("none");

  // вычислить кол-во товаров
  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);

  function onAddtoClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    console.log(qty);
    setCart({ ...cart, [product.id]: qty });
    setDisplay("flex");
    setTimeout(onHideNotification, 5000);
  }

  function onHideNotification() {
    setDisplay("none");
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddtoClick}>
        <FaCartPlus />
      </button>
      <Notification
        disp={display}
        current={cart[product.id] ? cart[product.id] : 0}
        allcount={total}
        name={product.name}
        onHideNotification={onHideNotification}
      />
    </div>
  );
}
