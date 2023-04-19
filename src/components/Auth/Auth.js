import { signin } from "../../firebase"

export default function Auth() {

  return (
    <div className="Auth">
      <button onClick={signin}>Sign in</button>
    </div>
  )
}