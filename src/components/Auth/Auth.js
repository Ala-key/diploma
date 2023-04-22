import { useContext } from "react";
import "./Auth.css"
import { signIn, signOff } from "../../firebase";
import { AppContext } from "../../App";
import {ImExit} from "react-icons/im";

export default function Auth() {
  const { user } = useContext(AppContext);

  return (
    <div className="Auth">
      {!user ? <button onClick={signIn}>Sign in</button> : null}
      {user ? <button className="signOut" onClick={signOff}><ImExit/></button> : null}
    </div>
  );
}