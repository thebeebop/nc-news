import { useContext } from "react";
import { userContext } from "../contexts";
import UserProfile from "./UserProfile";

function Header({ setIsPathToLogin }) {
  const { user } = useContext(userContext);

  return (
    <div
      id="header-container"
      onClick={() => {
        setIsPathToLogin(true);
      }}
    >
      <div>
        <h1>The Daily Dose</h1>
        <h2 id="get-your-daily-fix">GET YOUR DAILY NEWS FIX!</h2>
      </div>

      <UserProfile />
    </div>
  );
}

export default Header;
