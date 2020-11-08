import "./App.css";
import Route from "./route";
import React, { useEffect } from "react";
import { useUser } from "./components/Login/UserData";
function App() {
  const [getUser, setUser] = useUser();

  useEffect(() => {
    const { user } = JSON.parse(localStorage.getItem("userData")) || "";
    setUser(user);
  }, []);

  //console.log(getUser);
  return <Route />;
}

export default App;
