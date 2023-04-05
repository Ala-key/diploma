import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Hrrgrgrtge</h1>}></Route>
          <Route path="/about" element={<h1>About</h1>}></Route>
          <Route path="/contacts" element={<h1>Contacts</h1>}></Route>
          <Route path="/delivery" element={<h1>Delivery</h1>}></Route>

        </Routes>
      </Layout>

    </div>
  );
}

export default App;
