import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then(data => console.log(data))
  }, []);
 

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
