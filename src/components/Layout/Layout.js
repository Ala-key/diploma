import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../../Logo/Logo";
import firstphoto from "../../assets/bmw_3-series_1.jpg"
import CategoryList from "../CategoryList/CategoryList";
import {MdArrowForwardIos} from "react-icons/md"
import {MdArrowBackIosNew} from "react-icons/md"


export default function Layout({children}) {
  return (
    <div className="Layout">
      <header>
        <Logo></Logo>
        <Nav></Nav>
      </header>
      <div className="side-bar">
        <img src={firstphoto} alt="bmw3"/>
        <div className="btn">
            <button><MdArrowBackIosNew/></button>
            <button><MdArrowForwardIos/></button>
        </div>
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