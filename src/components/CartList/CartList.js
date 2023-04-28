import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import './CartList.css'
import {MdDelete} from "react-icons/md"

export default function CartList() {
  const {products,cart} = useContext(AppContext);

  const productsId = Object.keys(cart);


  const output = products
  // удалить все товароы которые не в корзине
  .filter((product) => productsId.includes(product.id))
  // вывести товары и их кол-во
  .map((product) => (
    <div className="CartItem" key={product.id}>
      <img src={product.photo} alt={product.name} />
      <Link id="Name" to={"/product/" + product.slug}>{product.name}</Link>
      <input type="number"  value={cart[product.id]} min={1}  />
      <span>{cart[product.id] * product.price} $</span>
      <button id="del"><MdDelete/></button>
      <br/>
    </div>
  ));

  
    return (
       <div className="CartList">
          {output}
        </div>
    );
}