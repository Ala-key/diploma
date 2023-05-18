import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { productsCollection, uploadProductPhoto } from "../../firebase";
import { addDoc } from "firebase/firestore";
import "./AddProduct.css";

export default function AddProduct({ category }) {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!user || !user.isAdmin) {
    return null;
    let ret = isSubmitting;
    
  }



  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangePrice(event) {
    setPrice(event.target.value);
  }
  function onChangePicture(event) {
    const file = event.target.files[0];
    setPicture(file);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    if (!picture) {
      alert("Please upload an image");
      return;
    }

    setIsSubmitting(true);
    uploadProductPhoto(picture)
      .then((pictureUrl) =>
        addDoc(productsCollection, {
          category: category.id,
          name: name,
          price: price,
          picture: pictureUrl,
          slug: name.replaceAll(" ", "-").toLowerCase(),
        })
      )
      .then(() => {
        setName("");
        setPrice("");
        setPicture(null);
      })
      .catch((error) => {
        console.log("Failed to add product:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="AddProduct">
      <form className="cf" onSubmit={onFormSubmit}>
        <h3>Create a new product</h3>
        <div className="half left cf">
          <input type="text" name="name"    required onChange={onChangeName} id="input-name"   value={name} placeholder="Name" />

          <input
            type="number"
            value={price}
            name="price"
            id="input-email"
            onChange={onChangePrice}
            min={0}
            required
          />
           <input
           id="input-subject"
            type="file"
            name="picture"
            onChange={onChangePicture}
            required
          />

        </div>
          
        <button type="submit"  id="input-submit" >Add</button>

      </form>
    </div>
  );
}