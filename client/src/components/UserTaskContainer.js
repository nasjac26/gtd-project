import React from 'react';
import { useState, useEffect} from 'react';


function UserTaskContainer() {
    
    const [userTasks, setUserTasks] = useState([])

    useEffect(() => {
    fetch("/users_tasks")
      .then((r) => r.json())
      .then(setUserTasks)
    }, []);

 

    return (
        <div><Task /></div>
    )
}


export default UserTaskContainer;