import { addDoc } from "firebase/firestore/lite";
import { useState } from "react"
import { categoryCollection } from "../../firebase";

export default function AddCategory() {
  const [category, SetCategory] = useState("");


  function onChangeCategory(event) {
    SetCategory(event.target.value);
  }


  function onAddCategory() {
     addDoc(categoryCollection, {name: category.trim(), slug: category.trim().replace(" ","-").toLocaleLowerCase()}).then(() => {SetCategory("")});

  }


  return (
    <div className="AddCategory">
      <input type="text"
        size="15"
        value={category}
        placeholder="Category name"
        onChange={onChangeCategory} />
      <button onClick={onAddCategory}>+</button>
    </div>
  )
}