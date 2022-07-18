import { useContext, useEffect, useState } from "react";
import { userContext } from "../contexts";

import { getUsers } from "../utils/api";

function Profile() {
  const [userz, setUserz] = useState([]);
  const { user } = useContext(userContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUserz(users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p id="loading-profile">Loading...</p>;
  return (
    <div id="profile-pic-two">
      {userz.map((uzer) => {
        if (userz.length === 0) {
          return <p id="loading">Loading...</p>;
        }
        if (uzer.username === user) {
          return (
            <span id="profile-span" key={uzer.username}>
              <img id="profile-img" src={uzer.avatar_url}></img>
              <p id="user-title-two">{uzer.username}</p>
            </span>
          );
        }
      })}
    </div>
  );
}

export default Profile;
