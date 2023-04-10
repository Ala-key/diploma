import { useMatch } from "react-router";
import { categories } from "../firebase";
import {getDocs} from "firebase/firestore/lite"
import { categories } from "../firebase";
import { useState } from "react";

export default function Category() {

  const [categorylist,SetCategoryList] = useState([]);
  const {params} = useMatch("/categories/:slug");
 
  getDocs(categories).then(snapshot => {
    const newCategoryList = [];
    snapshot.docs.forEach(doc => {
      const category = doc.data();
      category.id = doc.id;

      newCategoryList.push(category);
    })
    SetCategoryList(newCategoryList);
  })

  

  const category = categories.find((category) => category.slug === params.slug)

  return (
    <div className="Category">
      <h1>{category.name}</h1>
    </div>
  )
}