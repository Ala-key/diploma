import { useContext } from "react";
import "./Auth.css"
import { logIn, logOut } from "../../firebase";
import { AppContext } from "../../App";
import {ImExit} from "react-icons/im";

export default function Auth() {
  const { user } = useContext(AppContext);

  console.log(user);

  return (
    <div className="Auth">
      {!user ? <button onClick={logIn}>Sign in</button> : null}
      {user ? <button className="signOut" onClick={logOut}><ImExit/></button> : null}
    </div>
  );
}