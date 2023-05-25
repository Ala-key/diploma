import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { categoryCollection, onAuthChange, onCategoriesLoad, onProductsLoad, onOrdersLoad, onReviewsLoad} from "./firebase";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ThankYou from "./pages/ThankYou";
import Orders from "./pages/Orders";
import AboutUs from "./components/AboutUs/AboutUs";
import Contacts from "./pages/Contacts";
import ContactUs from "./components/ContactsUs/ContactUs";

// Создать контекст, который будет хранить данные.
export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  reviews: [],
  // контекст для корзины
  cart: {}, // содержимое корзинки
  setCart: () => {}, // изменить содержимое корзики

  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => { // выполнить только однажды
    getDocs(categoryCollection) // получить категории
      .then(({ docs }) => { // когда категории загрузились
        setCategories( // обновить состояние
          docs.map(doc => ({ // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id // и свойства id
          }))
        )
      });

    onCategoriesLoad(setCategories)

    onProductsLoad(setProducts);

    onOrdersLoad(setOrders);

    onReviewsLoad(setReviews);


    onAuthChange(user => {
      if (user) {
        user.isAdmin = user.email === "azalimir693@gmail.com";
      }
      setUser(user);
    });
  }, []);


  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart, user, orders, reviews }}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs/>} />
            <Route path="/contacts" element={<ContactUs/>} />
            <Route path="/delivery" element={<h1>Delivery</h1>} />
            <Route path="/categories/:slug" element={<Category />} />
            <Route path="/products/:slug" element={<Product />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;