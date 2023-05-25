import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import './CartList.css'
import {MdDelete} from "react-icons/md"

export default function CartList() {
  const {products,cart,setCart} = useContext(AppContext);

  const productsId = Object.keys(cart);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  function onRemoveClick(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }


  const output = products
  // удалить все товароы которые не в корзине
  .filter((product) => productsId.includes(product.id))
  // вывести товары и их кол-во
  .map((product) => (
    <div className="CartItem" key={product.id}>
      <img src={product.photo0} alt={product.name} />
      <Link id="Name">{product.name}</Link>
      <input
          type="number"
          value={cart[product.id]}
          min={1}
          onChange={(event) => onQuantityChange
            (product, +event.target.value)} />
      <span>{cart[product.id] * product.price} $</span>
      <button   onClick={() => onRemoveClick(product)} id="del"><MdDelete/></button>
      <br/>
    </div>
  ));

  
    return (
       <div className="CartList">
          {output}
        </div>
    );
}