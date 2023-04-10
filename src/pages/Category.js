import { useMatch } from "react-router-dom"
import NotFound from "./NotFound";

export default function Category() {
  const params = useMatch("/categories/:slug");

  const categories = [
    { id: 1, name: "Toyota", slug: "toyota" },
    { id: 2, name: "Honda", slug: "honda" },
    { id: 3, name: "Ford", slug: "ford" },
    { id: 4, name: "Chevrolet", slug: "chevrolet" },
    { id: 5, name: "Mercedes", slug: "mercedes" }
  ];


  const category = categories.find(
    (category) => category.slug === params.slug
  );

  
  
  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  );
}