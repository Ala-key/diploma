import { NavLink } from "react-router-dom";
import "./CategoryList.css"
import { SiMercedes } from "react-icons/si"
import { SiFord } from "react-icons/si"
import {SiChevrolet} from "react-icons/si"
import {SiHonda} from "react-icons/si"
import {SiBmw} from "react-icons/si"
import {SiAudi} from "react-icons/si"
import { useMatch } from "react-router";
import { categories } from "../../firebase";
import {getDocs} from "firebase/firestore/lite"
import { useState } from "react";







export default function CategoryList() {
  // const categories = [
  //   { id: 1, name: "Toyota", slug: "toyota" },
  //   { id: 2, name: "Honda", slug: "honda" },
  //   { id: 3, name: "Ford", slug: "ford" },
  //   { id: 4, name: "Chevrolet", slug: "chevrolet" },
  //   { id: 5, name: "Mercedes", slug: "mercedes" }
  // ];

  const [categorylist,SetCategoryList] = useState([]);
 
 
  getDocs(categories).then(snapshot => {
    const newCategoryList = [];
    snapshot.docs.forEach(doc => {
      const cat = doc.data();
      cat.id = doc.id;

      newCategoryList.push(cat);
    })
    SetCategoryList(newCategoryList);
  })


  const output = categorylist.map(category => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        {category.name} <SiMercedes></SiMercedes>
      </NavLink>
    </li>
  ))


  return (
    <div className="CategoryList">
      <ul>    
        {output}
        {/* <li>
          <NavLink to={"/categories/mercedes"}>
            <SiMercedes className="auto-icons"></SiMercedes> Mercedes
          </NavLink>
        </li>   
        <li>
          <NavLink to={"/categories/ford"}>
            <SiFord className="auto-icons"></SiFord> Ford
          </NavLink>
        </li>   
        <li>
          <NavLink to={"/categories/chevrolet"}>
            <SiChevrolet className="auto-icons"></SiChevrolet> Chevrolet
          </NavLink>
        </li>   
        <li>
          <NavLink to={"/categories/honda"}>
            <SiHonda className="auto-icons"></SiHonda> Honda
          </NavLink>
        </li>   
        <li>
          <NavLink to={"/categories/bmw"}>
            <SiBmw className="auto-icons"></SiBmw> BMW
          </NavLink>
        </li> 
        <li>
          <NavLink to={"/categories/audi"}>
            <SiAudi className="auto-icons"></SiAudi> Audi
          </NavLink>
        </li>  */}
      </ul>
    </div>
  )
}