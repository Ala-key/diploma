import { useContext } from "react"
import { AppContext } from "../../App"

export default function AddToCart({product}){
  const {cart,setCart} = useContext(AppContext);

    function onAddtoClick(){
      const qty = cart[product.id] ? cart[product.id] + 1 : 1;
      console.log(qty);
      setCart({...cart,[product.id]: qty})
    }
    return(
      <div className="AddToCart">
        {cart[product.id] ? cart[product.id] : 0}
        <button onClick={onAddtoClick}>Add To Cart</button>
      </div>
    )
}