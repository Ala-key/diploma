import { useContext } from "react";
import "./Auth.css"
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import { ImExit } from "react-icons/im";
import CartLink from "../CartLink/CartLink";

export default function Auth() {
  const { user } = useContext(AppContext);


  let styles;

  if (user) {
    const backgroundImageUrl = user && user.photoURL ? `url(${user.photoURL})` : null;
    styles = {
      backgroundImage: backgroundImageUrl,
      display: "block"
      // и другие свойства
    }
  }


  return (
    <div className="Auth">
      {user ? <CartLink /> : null}
      {!user ? <button onClick={logIn}>Sign in</button> : null}
      {user ? <button className="signOut" onClick={logOut}><ImExit /></button> : null}
      <div className="accountImage" style={styles}>

      </div>
    </div>
  );
}