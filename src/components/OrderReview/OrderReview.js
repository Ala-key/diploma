import { useContext, useState } from "react"
import { AppContext } from "../../App"
import { reviewsCollection } from "../../firebase";
import { addDoc } from "firebase/firestore";
import "./OrderReview.css";
import { FaPaperPlane } from "react-icons/fa"

export default function OrderReview({ productid }) {

  const { reviews, user } = useContext(AppContext);

  const [review, setReview] = useState("");

  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = currentDate.getFullYear();
  const formattedDate = `${day}.${month}.${year}`;



  function onChangeReview(event) {
    setReview(event.target.value);
  }

  const output = reviews.filter(review => review.product === productid).map(review => {
    const styles = {
      backgroundImage: `url(${review.useravatar})`
    };
    return (
      <div className="review" key={review.id}>
        <div className="avatar" style={styles}></div>
        <div className="info">
          <span id="name">{review.name}</span>
          <span id="date">{review.datacreate}</span>
        </div>
        <p id="review">{review.review}</p>
      </div>
    );
  });

  function onAddReview() {
    if (review === "") {
      return;
    }
    addDoc(reviewsCollection, {
      useravatar: user.photoURL,
      review: review,
      datacreate: formattedDate.toString(),
      product: productid,
      name: user.displayName
    }).then(() => {
      setReview("");
    });
  }

  let st;


    const backgroundImageUrl = user && user.photoURL ? `url(${user.photoURL})` : null;
    st = {
      backgroundImage: backgroundImageUrl,
    }




  return (
    <div className="OrderReview">
      <div className="sub-review">
        <div className="current-avatar" style={st}></div>
        <input
          size="15"
          type="text"
          value={review}
          placeholder="Enter your review"
          onChange={onChangeReview}
        />
        <button onClick={onAddReview}><FaPaperPlane/></button>
      </div>
      <div className="view-reviews">
        {output}
      </div>
    </div>
  )
}