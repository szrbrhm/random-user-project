import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./component/Card";

function App() {
  const [item, setItem] = useState();
  const [changeUser, setChangeUser] = useState(0);
  const getItem = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => setItem(res?.data?.results[0]));
  };

  useEffect(() => {
    //   fetch('https://https://randomuser.me/api/results')
    // .then(response => response.json())
    // .then((data) => setItemList(data));

    getItem();
    // console.log(changeUser);
  }, [changeUser]);

  return (
    <div className="App">
      <Card item={item} />

      <button onClick={() => setChangeUser(changeUser + 1)}>Random User</button>
    </div>
  );
}

export default App;
