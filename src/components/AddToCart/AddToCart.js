import { useContext, useState } from "react";
import { AppContext } from "../../App";
import "./AddToCart.css"
import Notification from "../Notification/Notification";
import { useNavigate } from "react-router";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);
  const [display, setDisplay] = useState("none");

  // вычислить кол-во товаров
  const total = Object.values(cart).reduce((acc, num) => acc + num, 0);
  const navigate = useNavigate();

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

function onAddtoClickandCartList(){
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    console.log(qty);
    setCart({ ...cart, [product.id]: qty });
    navigate('/cart');
}

  return (
    <div className="AddToCart">
      <button onClick={onAddtoClickandCartList} className="buy">
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
        onHideNotification={onHideNotification}
      />
    </div>
  );
}
