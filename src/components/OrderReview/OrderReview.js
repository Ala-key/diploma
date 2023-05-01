import { useContext, useState } from "react"
import { AppContext } from "../../App"
import { reviewsCollection } from "../../firebase";
import { addDoc } from "firebase/firestore";

export default function OrderReview({productid}) {

  const { reviews,user } = useContext(AppContext);

  const [review, setReview] = useState("");

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = currentDate.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;



  function onChangeCategory(event) {
    setReview(event.target.value);
  }


  function onAddCategory() {
    addDoc(reviewsCollection, {
      useravatar: user.photoURL,
      review: review,
      datacreate: formattedDate.toString(),
      product: productid
    }).then(() => {
      setReview("");
    });
  }


  return(
    <div className="AddCategory">
    <input
      size="15"
      type="text"
      value={review}
      placeholder="Category name"
      onChange={onChangeCategory}
    />
    <button onClick={onAddCategory}>+</button>
  </div>
  )
}