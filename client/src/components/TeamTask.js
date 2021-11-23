function TeamTask(props) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <p>{props.username}</p>
                    <p>{props.taskname}</p>
                    <p>Priotity: {props.taskweight}</p>
            </div>
        </div>
        </div>
    )
}


export default TeamTask;

// key={teamTask.id}
// userName={teamTask.username}
// taskName={teamTask.username.name}
// taskWeight={teamTask.username.weight_tag}