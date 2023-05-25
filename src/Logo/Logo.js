import logo from "../assets/engl-logo.jpeg"
import "./Logo.css"



export default function Logo() {
  return (
    <div className="Logo">
        <img src={logo} alt="logo" id="logo" />
    </div>
  )
}