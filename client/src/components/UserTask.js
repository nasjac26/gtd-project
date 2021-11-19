function UserTask(props) {
    return (
        <div>
            <div className="card">
                <h4 className="card-body">{props.taskName}{props.taskWeight}</h4>
            </div>
        </div>
    )
}


export default UserTask;