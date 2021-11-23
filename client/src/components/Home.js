import UserTaskContainer from './UserTaskContainer';
import TeamTaskContainer from './TeamTaskContainer';

function Home(props) {
    return (
        <div>
            <div class="row align-items-start">
                <div class="col">
                    <UserTaskContainer user_id={props.user.id}  />
                </div>
        </div>
            <div class="col">
                <div className="container pb-4">
                </div>
                <div className="container ">
                    <TeamTaskContainer team_id={props.user.teams[0].id} />
                </div>
            </div>
        </div>
        
    )
};


export default Home;