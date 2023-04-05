import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/delivery" element={<Delivery/>}></Route>

        </Routes>
      </Layout>

    </div>
  );
}

export default App;
