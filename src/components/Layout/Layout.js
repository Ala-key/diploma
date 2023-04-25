import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import Auth from "../Auth/Auth";


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