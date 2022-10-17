import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  const [user, setUsers] = useState([]);
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      setUsers(res.data.data);
    });
    axios.get(" https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPoke(res.data.results);
    });
  }, []);

  

  return (
    <div className="App">
      <div>
        {user.map((user, index) => (
          <div id="userDisplay" key={index}>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <img alt="profile-pic" src={user.avatar}></img>
          </div>
        ))}
      </div>
      <ul>
        {poke.map((pokeObj, index) => (
          <li key={index}>
            {pokeObj.name} 
          </li>
        ))}
      </ul>
    </div>
  );
}
