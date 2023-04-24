import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../../Logo/Logo";
import firstphoto from "../../assets/anwb_w760.jpg"
import CategoryList from "../CategoryList/CategoryList";
import { MdArrowForwardIos } from "react-icons/md"
import { MdArrowBackIosNew } from "react-icons/md"
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";


export default function Layout({ children }) {
  return (
    <div className="Layout">
      <header>
        <Logo></Logo>
        <Nav></Nav>
        <div id="icons">
          <CartLink/>
          <Auth />
        </div>
      </header>
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