import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import Auth from "../Auth/Auth";
import Drawer from "../Drawer/Drawer";
import NavToggle from "../NavToggle/NavToggle";
import video from "../../assets/Autos.mp4"
import { PopupCategory } from "../PopupCategory/PopupCategory";
import { useState } from "react";



export default function Layout({ children }) {
 

  return (
    <div className="Layout">
      
      <header>
        
        <Logo></Logo>
        <Nav></Nav>
        <div id="icons">
          <Auth />
        </div>
      </header>
      
      <div className="video">
         <h1>Choose us Choose safety Choose comfort</h1>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <aside>
        <CategoryList></CategoryList>
      </aside>
      <main>
        {children}
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}