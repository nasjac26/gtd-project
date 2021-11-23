import React from 'react';
import { useState, useEffect} from 'react';
import UserTask from './UserTask';

function UserTaskContainer(props) {
  const [userTasks, setUserTasks] = useState([]);

  let id = props.user_id;

  useEffect(() => {
  fetch(`/users/${id}`)
    .then((r) => r.json())
    .then((data) => checkIfUserTaskExists(data)) //taking data and running it through handler function to see if it exists before SETTING to usertasks
  }, [id]);
  
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
          taskname={userTask.name}
          taskweight={userTask.weight_tag}
        />
      );
    });
  }

  return (
    <div className="container border">
      <h1 className="d-flex justify-content-around pb-4">What you are getting done</h1>
      <div className="d-flex justify-content-around pb-4">{renderUserTasks()}</div>
    </div>

  )
}



export default UserTaskContainer;