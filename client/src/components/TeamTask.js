function TeamTask(props) {
    return (
        <div className="container">
            <h1>{props.username} {props.taskName} {props.taskWeight}</h1>
        </div>
    )
}


export default TeamTask;

// key={teamTask.id}
//                     userName={teamTask.username}
//                     taskName={teamTask.username.name}
//                     taskWeight={teamTask.username.weight_tag}