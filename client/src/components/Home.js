import UserTaskContainer from './UserTaskContainer';
import TeamTaskContainer from './TeamTaskContainer';

function Home(props) {
    console.log(props)
    return (
        <div>
            <UserTaskContainer user_id={props.user.id}  />
            <TeamTaskContainer />
        </div>
    )
}


export default Home;