import { useMatch } from "react-router";

export default function Category() {

  const {params} = useMatch("/categories/:slug");
  const categories = [
    { id: 1, name: "Mercedes", slug: "mercedes" },
    { id: 2, name: "Honda", slug: "honda" },
    { id: 3, name: "Ford", slug: "ford" },
    { id: 4, name: "Chevrolet", slug: "chevrolet" },
    { id: 5, name: "Audi", slug: "audi" },
    { id: 6, name: "BMW", slug: "bmw" }

  ];

  const category = categories.find((category) => category.slug === params.slug)

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  )
}