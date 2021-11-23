import React from 'react';
import { useState, useEffect} from 'react';
import UserTask from './UserTask';

function UserTaskContainer(props) {
  const [userTasks, setUserTasks] = useState([]);
  let id = props.user_id
  useEffect(() => {
  fetch(`/users/${id}`)
    .then((r) => r.json())
    .then((data) => console.log(data)) //taking data and running it through handler function to see if it exists before SETTING to usertasks
  }, []);
  
  // function checkIfUserTaskExists(data){
  //   if (!!data.tasks){
  //     setUserTasks(data.tasks); //if exists set to usertasks 
  //   }
  // }

  function renderUserTasks() {
    return userTasks.map((userTask) => {
      return (
        <UserTask 
          key={userTask.id}
          taskname={userTask.name}
          taskweight={userTask.weight_tag}
        />
      );
    });
  }

  return (
    <div className="container p-3 my-3 border border-5 w-25 ">{renderUserTasks()}</div>
  )
}



export default UserTaskContainer;