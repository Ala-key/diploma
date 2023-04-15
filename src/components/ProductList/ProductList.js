import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../App";
import "./ProductList.css"

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);


  const output = products.filter(product => product.category === category.id).map(product => (
    <div className="Product">
      <img src={product.photo} alt={product.name}></img>
      <div className="info">
        <NavLink to={'/product/' + product.slug} className="bold-weight">
          {product.name}
        </NavLink>
        <span>{product.bodytype}</span>
        <span>{product.buildcountry}</span>
        <span className="bold-weight">{product.price} $</span>
      </div>
    </div>
  ))

  return (
    <div className="ProductList">
      {output}
    </div>
  )
}