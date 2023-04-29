export default function AddProduct() {
  return (
    <div className="AddProduct">
        <form>
          <h3>Create a new product</h3>
          <label>
            Name: <input type="text" name="name" required/>
          </label>
          <label>
            Price: <input type="number" name="price" required min={0}/>
          </label>
        </form>
    </div>
  )
}