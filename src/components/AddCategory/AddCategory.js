import { addDoc } from "firebase/firestore";
import { useContext, useState } from "react"
import { AppContext } from "../../App";
import { categoryCollection } from "../../firebase";

export default function AddCategory() {
  const [category, SetCategory] = useState("");
  const { user } = useContext(AppContext);


  if(!user || !user.isAdmin){ return null;}


  function onChangeCategory(event) {
    SetCategory(event.target.value);
  }


  function onAddCategory() {
    addDoc(categoryCollection, {name: category.trim(), slug: category.trim().replaceAll(" ","-").toLocaleLowerCase()}).then(() => {SetCategory("")});

 }

 
}