import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../../Logo/Logo";

export default function Layout({children}) {
  return (
    <div className="Layout">
      <header>
        <Logo></Logo>
        <Nav></Nav>
      </header>
      <aside>
        <nav>NAV CATEGORIES</nav>
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