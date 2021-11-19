function TeamTask(props) {
    return (
        <div className="container">
            <p>
                {props.username} 
                {props.taskname} 
                {props.taskweight}
            </p>
        </div>
    )
}


export default TeamTask;

// key={teamTask.id}
// userName={teamTask.username}
// taskName={teamTask.username.name}
// taskWeight={teamTask.username.weight_tag}