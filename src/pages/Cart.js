import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderForm/OrderForm";
import "./Cart.css"

export default function Cart() {
  return(
    <div className="carter">
      <h1>Cart</h1>
      <CartList/>
      <OrderForm/>
    </div>

  )
}