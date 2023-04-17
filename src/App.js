import { getDocs } from "firebase/firestore/lite";
import { createContext, useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { categoryCollection, productCollection } from "./firebase";
import About from "./pages/About";
import Category from "./pages/Category";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";


export const AppContext = createContext({
  categories: [],
  products: [],
  cart:{},
  setCart:() => {},
});



function App() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


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
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{categories,products,cart,setCart}}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contacts" element={<Contacts />}></Route>
            <Route path="/delivery" element={<Delivery />}></Route>
            <Route path="/categories/:slug" element={<Category />}></Route>
            <Route path="/product/:slug" element={<Product />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
