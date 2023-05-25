import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import "./BestProducts.css";

export default function BestProducts() {
  const { orders, products } = useContext(AppContext);

  const [activeIndex, setActiveIndex] = useState(0);
  const [img, setImg] = useState([]);

  useEffect(() => {
    const output = orders.sort((a, b) => {
      const cartA = Object.values(a.cart).reduce((acc, val) => acc + val, 0);
      const cartB = Object.values(b.cart).reduce((acc, val) => acc + val, 0);

      return cartB - cartA;
    });

    if (output.length > 0 && output[0].cart) {
      const bestProduct = output[0].cart;
      const bestProductKeys = Object.keys(bestProduct);

      const images = bestProductKeys.map((key) => {
        const product = products.find((product) => product.id === key);

        const photo = product.photo0;

        return (
          <div key={`${product.id}-photo0`} className="slider-img-container">
            <img src={photo} alt="icon" />
          </div>
        );
      });

      setImg(images);
    }
  }, [orders, products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === img.length - 1 ? 0 : current + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [img]);

  const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1;
  const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1;

  return (
    <div className="slider">
      <div className="slider-img slider-img-prev" key={prevImgIndex}>
        {img[prevImgIndex]}
      </div>
      <div className="slider-img" key={activeIndex}>
        {img[activeIndex]}
      </div>
      <div className="slider-img slider-img-next" key={nextImgIndex}>
        {img[nextImgIndex]}
      </div>
    </div>
  );
}
