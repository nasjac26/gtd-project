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
        if (!!data.tasks) {
            setTeamTasks(data.tasks);
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
        <div>
            {renderTeamTasks()}
        </div>
    )
}


export default TeamTaskContainer;