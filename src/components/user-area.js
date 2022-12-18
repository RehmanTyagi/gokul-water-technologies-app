import "./user-area.css";
import { useState } from "react";
import { Cart } from "./cart";
import UserPanel from "./userPanel";
import SearchFeature from "./searchFeature";
function UserArea() {
  const [showCart, setShowCart] = useState(false);
  const [showSearchFeature, setShowSearchFeature] = useState(false);
  const [showUserPanel, setShowUserPanel] = useState(false);
  const onHover = () => {
    setShowCart(!showCart);
  };
  const onIconClick = () => {
    setShowSearchFeature(!showSearchFeature);
  };
  const onUserPanel = () => {
    setShowUserPanel(!showUserPanel);
  };

  return (
    <div>
      <div className="user-area">
        <span onClick={onIconClick} className="material-icons-outlined">
          search
        </span>
        <span
          onClick={onUserPanel}
          className="user-panel_icon material-icons-outlined"
        >
          account_circle
        </span>
        {showUserPanel && <UserPanel className="user-panel" />}
        <span onClick={onHover} className="material-icons-outlined">
          shopping_cart
        </span>
      </div>
      {showCart && <Cart closeCart={onHover} className="user-cart" />}
      {showSearchFeature && (
        <SearchFeature
          closeSearchBar={onIconClick}
          className="user-search_bar"
        />
      )}
    </div>
  );
}

export default UserArea;
