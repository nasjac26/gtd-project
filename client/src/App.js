import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const [user, setUser] =useState(null);

  useEffect(() => {
    //this auto logins
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login />;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
      </Routes>
    </div>
  )
}

export default App;

// function App() {
//   return (
//     <Routes>
//       <Route path="invoices" element={<Invoices />}>
//         <Route path=":invoiceId" element={<Invoice />} />
//         <Route path="sent" element={<SentInvoices />} />
//       </Route>
//     </Routes>
//   );
// }
