import UserTaskContainer from './UserTaskContainer';
import TeamTaskContainer from './TeamTaskContainer';

function Home(props) {
    console.log("check home teamtask", props)
    return (
        <div>
            <UserTaskContainer user_id={props.user.id}  />
            <TeamTaskContainer team_id={props.user.teams[0].id} />
        </div>
    )
}


export default Home;