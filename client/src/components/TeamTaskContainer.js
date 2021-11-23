import React from 'react';
import { useState, useEffect} from 'react';
import TeamTask from "./TeamTask";

function TeamTaskContainer(props) {
    const [teamTasks, setTeamTasks] = useState([])

    let id = props.team_id;

    console.log("check team props", props)
    useEffect(() => {
    fetch(`/teams/${id}`)
        .then((r) => r.json())
        .then((data) => checkIfTeamTasksExist(data))
    }, [id]);

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
                    username={teamTask.username}
                    taskname={teamTask.name}
                    taskweight={teamTask.weight_tag}
                />
            )
        })  
    }
    
    return (
        <div className="container p-3 my-3 border border-5 w-25 ">{renderTeamTasks()}</div>
    )
}


export default TeamTaskContainer;