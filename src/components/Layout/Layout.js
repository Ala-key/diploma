import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import Auth from "../Auth/Auth";
import Drawer from "../Drawer/Drawer";
import NavToggle from "../NavToggle/NavToggle";
import { PopupCategory } from "../PopupCategory/PopupCategory";
import { useState } from "react";
import video from "../../assets/Autos.mp4"
import { useMatch } from 'react-router-dom';
import BestProducts from "../BestProducts/BestProducts";
import { AiTwotoneStar } from "react-icons/ai"
import Footer from "../../pages/Footer";




export default function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const match = useMatch('/');

  const categ = useMatch('/categories/:car')

  const about = useMatch('/about')

  const contacts = useMatch('/contacts')

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  function toggleFalse() {
    setDrawerOpen(false);
  }

  console.log(categ);

  return (
    <div className="Layout">

      <header>
        <PopupCategory open={drawerOpen} toggle={toggleDrawer} toggleFalse={toggleFalse} className="popup" />
        <NavToggle callback={toggleDrawer} />
        <Logo></Logo>
        <Nav className="Nav"></Nav>
        <div id="icons">
          <Auth />
        </div>
      </header>



      {match === null && categ === null ? null : (
        <div className="container">
          <div className="video">
            <h1>Choose us Choose safety Choose comfort</h1>
            <video autoPlay muted loop>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="bestProductsList">
            <h1 className="slider-slogan"><AiTwotoneStar color="#a70403" />Our best selling machines</h1>
            <BestProducts />
          </div>
        </div>
      )}


      {about != null ? null : (
        <aside>
          <CategoryList></CategoryList>
        </aside>
      )}

      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}