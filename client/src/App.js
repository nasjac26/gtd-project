import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";

function getSessionStorageOrDefault(key, defaultValue) {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}



function App() {
  const [user, setUser] = useState(
      getSessionStorageOrDefault('loginform', false)
    );



  useEffect(() => {
    //this auto logins
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  useEffect(() => {
    sessionStorage.setItem('loginform', JSON.stringify(user));
  }, [user]);

  if (!user) {
    return (
      <div>
        <Login onLogin={setUser} />
      </div>
    );
  }
// if (!user) return ;

  return (
    <div>
      <NavBar user={user} setUser={setUser}  />
      <Routes>
        <Route path="/" element={<Home user={user} setUser={setUser} />}></Route>
      </Routes>
    </div>
  )
}

export default App;

