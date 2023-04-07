import { NavLink } from "react-router-dom";

export default function CategoryList() {
  const categories = [
    { id: 1, name: "Toyota", slug: "toyota" },
    { id: 2, name: "Honda", slug: "honda" },
    { id: 3, name: "Ford", slug: "ford" },
    { id: 4, name: "Chevrolet", slug: "chevrolet" }
  ];

  const output = categories.map(category => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
          {category.name}
      </NavLink>
    </li>
  ))


  return (
    <div className="CategoryList">
       <ul>{output}</ul>
    </div>
  )
}