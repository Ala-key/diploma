import "./Notification.css";
import check from "../../assets/check-icon.png";


export default function Notification({
  current,
  allcount,
  name,
  disp,
  onHideNotification,
}) {
  const styles = {
    display: disp,
  };

  

  return (
    <div className="modal-overlay" style={styles}>
      <div className="modal">
        <img className="check" src={check} alt="" />
        <h6>Success!</h6>
        <p>You have successfully added the car to the cart</p>
        <div>
          <p>
            <strong>{name} in cart:</strong> {current}
          </p>
          <p>
            <strong>General cars in cart :</strong>
            {allcount}
          </p>
        </div>
      </div>
    </div>
  );
}
