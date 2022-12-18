import "./userPanel.css";
const UserPanel = (props) => {
  return (
    <div className={props.className}>
      <div className="user-panel_options">
        <a href="www.google.com">My Account</a>
        <a href="www.google.com">My Orders</a>
        <a href="www.google.com">My Searches</a>
        <a href="www.google.com">Log-Out</a>
      </div>
    </div>
  );
};
export default UserPanel;
