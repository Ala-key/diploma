import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import AddToCart from "../AddToCart/AddToCart";
import "./ProductList.css"


export default function ProductList({ category }) {
  const { products } = useContext(AppContext);


  const output = products.filter(product => product.category === category.id).map(product => (
    <div className="Product">
      <img className="carphoto" src={product.photo} alt={product.name}></img>
      <div className="info">
        <NavLink to={'/product/' + product.slug} className="bold-weight">
          {product.name}
        </NavLink>
        <span>{product.bodytype}</span>
        <span>{product.buildcountry}</span>
        <span className="bold-weight">{product.price} $</span>
        <AddToCart product={product}></AddToCart>
      </div>
    </div>
  ))

  return (
    <div className="ProductList">
      {output}
    </div>
  )
}