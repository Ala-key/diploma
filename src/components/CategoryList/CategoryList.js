import { NavLink } from "react-router-dom";
import "./CategoryList.css"
import { useContext } from "react";
import { AppContext } from "../../App";
import { SiMercedes } from "react-icons/si"
import { SiFord } from "react-icons/si"
import { SiChevrolet } from "react-icons/si"
import { SiHonda } from "react-icons/si"
import { SiBmw } from "react-icons/si"
import { SiAudi } from "react-icons/si"






export default function CategoryList() {

  const {categories} = useContext(AppContext);




  const output = categories.map(category => {
    let icon = null;
    switch (category.name) {
      case "Mercedes":
        icon = <SiMercedes className="auto-icons" />;
        break;
      case "Ford":
        icon = <SiFord className="auto-icons" />;
        break;
      case "Chevrolet":
        icon = <SiChevrolet className="auto-icons" />;
        break;
      case "Honda":
        icon = <SiHonda className="auto-icons" />;
        break;
      case "BMW":
        icon = <SiBmw className="auto-icons" />;
        break;
      case "Audi":
        icon = <SiAudi className="auto-icons" />;
        break;
      default:
        break;
    }
  
    return (
      <li key={category.id}>
        <NavLink to={"/categories/" + category.slug}>
          {icon}
          {category.name}
        </NavLink>
      </li>
    );
  });
    // const output = categories.map(category => (
    //   <li key={category.id}>
    //     <NavLink to={"/categories/" + category.slug}>
    //       {category.name}
    //     </NavLink>
    //   </li>
    // ));


  


  return (
    <div className="CategoryList">
      <ul>
        {output}
      </ul>
    </div>
  )
}