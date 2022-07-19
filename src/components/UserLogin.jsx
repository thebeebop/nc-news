import { useEffect, useState } from "react";
import { useContext } from "react";
import { userContext } from "../contexts";
import { getUsers } from "../utils/api";
import { IoHomeSharp } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Profile from "./Profile";
function UserLogin({ setUser, setIsPathToLogin, setIsLoggedIn, isLoggedIn }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(userContext);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  //   if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div id="top-box"></div>
      <div id="home-button-box">
        <Link
          to="/articles/home"
          onClick={() => {
            setIsPathToLogin(false);
          }}
        >
          <IoHomeSharp id="home-button" />
        </Link>
      </div>
      <div id="empty-box"></div>
      <div id="user-login-box">
        <div id="header-container-2">
          <h1 id="login-page-header">The Daily Dose</h1>
          <h2 id="get-your-daily-fix-login-page">
            GET YOUR HIGH ON OUR SUPPLY!
          </h2>
        </div>
        {user ? (
          <>
            <h3 id="logged-in-as-text">Logged in as:</h3>
            <Profile />
          </>
        ) : (
          <h3 id="logged-in-as-text">Not Logged In</h3>
        )}

        <form
          id="form-login"
          onSubmit={(event) => {
            event.preventDefault();
            setIsPathToLogin(false);
            setIsLoggedIn(true);
          }}
        >
          <input
            id="user-login-button"
            type="submit"
            value="Get my Fix!"
          ></input>

          <h3 id="OR">-OR-</h3>

          <label id="select-user">Select Other User:</label>
          <select
            id="select-users-dropdown"
            defaultValue="jessjelly"
            onChange={(event) => {
              let value = event.target.value;
              setUser(value);
            }}
          >
            {users.map((user) => {
              return (
                <option key={user.username} value={user.username}>
                  {user.username}
                </option>
              );
            })}
          </select>
        </form>
      </div>

      <section id="user-login-background"></section>
    </div>
  );
}

export default UserLogin;
