import React from 'react';
import { useState, useEffect} from 'react';
import UserTask from './UserTask';

function UserTaskContainer() {
  const [userTasks, setUserTasks] = useState([]);
  
  useEffect(() => {
  fetch("/users/1")
    .then((r) => r.json())
    .then((data) => checkIfUserTaskExists(data)) //taking data and running it through handler function to see if it exists before SETTING to usertasks
  }, []);
  
  function checkIfUserTaskExists(data){
    if (!!data.tasks){
      setUserTasks(data.tasks); //if exists set to usertasks 
    }
  }

  function renderUserTasks() {
    return userTasks.map((userTask) => {
      return (
        <UserTask 
          key={userTask.id}
          taskName={userTask.name}
          taskWeight={userTask.weight_tag}
        />
      );
    });
  }

  return (
    // <div></div>
    <div className="container p-3 my-3 border border-5 w-25 ">{renderUserTasks()}</div>
  )
}



export default UserTaskContainer;