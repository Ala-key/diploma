import { addDoc } from "firebase/firestore";
import { useContext, useState } from "react"
import { AppContext } from "../../App";
import { categoryCollection } from "../../firebase";

export default function AddCategory() {
  const [category, SetCategory] = useState("");
  

  const { user } = useContext(AppContext);
}