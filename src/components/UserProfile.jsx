import { useContext, useEffect, useState } from "react";
import { userContext } from "../contexts";
import Loading from "../components/Loading";
import { getUsers } from "../utils/api";

function UserProfile() {
  const [userz, setUserz] = useState([]);
  const { user } = useContext(userContext);

  useEffect(() => {
    getUsers().then(({ users }) => {
      setUserz(users);
    });
  }, []);

  return (
    <div>
      {userz.map((uzer) => {
        if (uzer.username === user) {
          return (
            <span id="img-span" key={uzer.username}>
              <img id="pic" src={uzer.avatar_url}></img>
              <p id="user-title">{uzer.username}</p>
            </span>
          );
        }
      })}
    </div>
  );
}

export default UserProfile;
