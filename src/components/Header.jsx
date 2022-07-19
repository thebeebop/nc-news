import { useContext } from "react";
import { userContext } from "../contexts";
import UserProfile from "./UserProfile";

function Header({ setIsPathToLogin }) {
  const { user } = useContext(userContext);

  return (
    <div id="header-container">
      <div>
        <h1>The Daily Dose</h1>
        <h2 id="get-your-daily-fix">GET YOUR DAILY NEWS FIX!</h2>
      </div>
      <button
        id="profile-click"
        onClick={() => {
          setIsPathToLogin(true);
        }}
      >
        <UserProfile />
      </button>
    </div>
  );
}

export default Header;
