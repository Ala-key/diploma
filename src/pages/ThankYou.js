import "./ThankYou.css"


export default function ThankYou() {
  setTimeout(() => {
    window.location.href = "/";
  }, 2000);
  
  return(
    <div>
      <h1 className="thank">Thank You ^^</h1>
      <p id="info">Your order has been received. Our specialists will contact with you shortly to confirm it.</p>
    </div>
  )
}