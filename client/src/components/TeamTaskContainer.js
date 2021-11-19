import React from 'react';
import { useState, useEffect} from 'react';
import TeamTask from "./TeamTask";

function TeamTaskContainer() {
    const [teamTasks, setTeamTasks] = useState([])

    useEffect(() => {
    fetch("/teams/1")
        .then((r) => r.json())
        .then((data) => checkIfTeamTasksExist(data))
    }, []);

    function checkIfTeamTasksExist(data) {
        if (!!data.users) {
           let allTasks = data.users.map((user) => {
                let username = user.username;
                return user.tasks.map((task) => {
                    task.username = username
                    return task
               })
           })
          
            setTeamTasks(allTasks.flat());
        }
    }

    function renderTeamTasks() {
        return teamTasks.map((teamTask) => {
            return (
                <TeamTask 
                    key={teamTask.id}
                    userName={teamTask.username}
                    taskName={teamTask.username.name}
                    taskWeight={teamTask.username.weight_tag}
                />
            )
        })  
    }
    
    return (
        // <div></div>
        
        <div className="container p-3 my-3 border border-5 w-25 ">{renderTeamTasks()}</div>
    )
}


export default TeamTaskContainer;