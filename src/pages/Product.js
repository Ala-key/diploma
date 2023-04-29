import { useContext, useState } from "react";
import { useMatch } from "react-router";
import { AppContext } from "../App";
import "./Product.css";
import {MdArrowForwardIos} from "react-icons/md"
import {MdArrowBackIos} from "react-icons/md"

export default function Product() {

  
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);


  const product = products.find(product => product.slug === params.slug);

  const photoProps = [];
  let i = 0;
  while (product.hasOwnProperty(`photo${i}`)) {
    photoProps.push(product[`photo${i}`]);
    i++;
  }

  //Все фото
  // const photoProps = Object.keys(product).filter(key => key.startsWith('photo')).map(key => product[key]);


  const [photos, setPhotos] = useState(photoProps[0]);
  const [index, setIndex] = useState(0);
  
  

  function onForwardReplacePhoto() {
    if (index === photoProps.length - 1) {
      return;
    }
  
    setIndex(index + 1);
  
    setPhotos(photoProps[index + 1]);
  }
  
  function onBackReplacePhoto() {
    if (index === 0) {
      return;
    }
  
    setIndex(index - 1);
  
    setPhotos(photoProps[index - 1]);
  }



  return(
    <div className="Product">
        <h1>{product.name}</h1>

        <div className="border-img">
           <button onClick={onBackReplacePhoto}   className="carousel-button"><MdArrowBackIos/></button>
           <img id="main-img" src={photos} alt={product.name} />
           <button onClick={onForwardReplacePhoto}  className="carousel-button right"><MdArrowForwardIos/></button>
        </div>
        <h2>Specifications</h2>
       <table>
        <tbody>
            <tr>
              <td className="value">
                Price
              </td>
              <td className="bold">
                {product.price}$
              </td>
            </tr>
            <tr>
              <td className="value">
                Body type
              </td>
              <td className="bold">
                {product.bodytype}
              </td>
            </tr>
            <tr>
              <td className="value">
                Year
              </td>
              <td className="bold">
                {product.year}
              </td>
            </tr>
            <tr>
              <td className="value">
                Build country
              </td>
              <td className="bold">
                {product.buildcountry}
              </td>
            </tr>
        </tbody>
       </table>
    </div>
  )
}