import "./OrderForm.css"


export default function OrderForm() {
  return(
    <form className="OrderForm">
      <h2>Create an order</h2>
      <label>
        Name: <input type="text" name="required" required/>
      </label>
      <label>
        Phone: <input type="tel" name="phone" required/>
      </label>
      <label>
        Email: <input type="email" name="email" required/>
      </label>
      <label>
        Address: <input type="text" name="address" required/>
      </label>
      <button>Submit</button>
    </form>
  )
}