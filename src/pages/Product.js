import { useContext } from "react";
import { useMatch } from "react-router";
import { AppContext } from "../App";
import NotFound from "./NotFound";

export default function Product() {
  const { params } = useMatch("/product/:slug");
  const { products } = useContext(AppContext);


  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound/>
  }


  return(
    <div className="Product">
        <h1>{product.name}</h1>
        <img src={product.photo} alt={product.name}></img>
        <span>{product.price} $</span>
    </div>
  )
}