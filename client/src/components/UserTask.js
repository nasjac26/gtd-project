function UserTask(props) {
    return (
        <div>
            <div className="card">
                <p className="card-body">{props.username}{props.taskname}{props.taskweight}</p>
            </div>
        </div>
    )
}


export default UserTask;