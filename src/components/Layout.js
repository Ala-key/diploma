import Nav from "./Nav/Nav";
import logo from "../../src/assets/b-logo.png"

export default function Layout({children}) {
  return (
    <div className="Layout">
      <header>
        <img src="logo" alt="logo" />
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