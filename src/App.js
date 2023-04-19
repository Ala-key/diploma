import { getDocs } from "firebase/firestore/lite";
import { createContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { categoryCollection, onAuthChange, productCollection } from "./firebase";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ThankYou from "./pages/ThankYou";


export const AppContext = createContext({
  categories: [],
  products: [],
  cart:{},
  setCart:() => {},
  user: null,
});



function App() {

  const [user,setUser] = useState(null);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {return JSON.parse(localStorage.getItem("cart")) || {}});

  useEffect(() => {
    localStorage.setItem("cart",JSON.stringify(cart))
  },[cart]);


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
  }, []);


  useEffect(() => { // выполнить только однажды
    getDocs(productCollection) // получить категории
      .then(({ docs }) => { // когда категории загрузились
        setProducts( // обновить состояние
          docs.map(doc => ({ // новый массив
            ...doc.data(), // из свойств name, slug
            id: doc.id // и свойства id
          }))
        )
      });


      onAuthChange(user => {setUser(user)});
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{categories,products,cart,setCart,user}}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/delivery" element={<Delivery />}></Route>
            <Route path="/categories/:slug" element={<Category />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/product/:slug" element={<Product />}></Route>
            <Route path="*" element={<NotFound />}></Route>
            <Route path="/thank-you" element={<ThankYou/>}></Route>
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
