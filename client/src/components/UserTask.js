function UserTask(props) {
    return (
        <div>
            <div className="card">
                <p className="card-body">
                    <p>{props.username}</p>
                    <p>{props.taskname}</p>
                    <p>Priotity: {props.taskweight}</p>
                </p>
            </div>
        </div>
    )
}


export default UserTask;