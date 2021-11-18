import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  // const FETCH_URL = "http://localhost:3000/user_tasks"
  // const [userTasks, setUserTasks] = useState([])

  // useEffect(() => {
  //   // fetch(FETCH_URL, {
  //   //   mode: 'no-cors',
  //   //   method: "post",
  //   //   headers: {
  //   //     "Content-Type": "application/json"
  //   //   },
  //   //   body: JSON.stringify(ob)
  //   // })
  //   })
  //   .then(r => r.json())
  //   .then((json) => console.log(json))
  //   // getUserTasks();
  // }, [])  
    

  // const getUserTasks = () => {
  //     fetch(FETCH_URL)
  //     .then(r => r.json())
  //     .then((json) => console.log(json))
  // } // setUserTasksOnLoad(json.reverse())

  // const setUserTasksOnLoad = (userTasks) => {
  //   setUserTasks(userTasks);
  // }  

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
