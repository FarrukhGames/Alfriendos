import Friend from './Friend'; 
import store from '../data/state';
const Friends = (props) => {
    return (
        <div className="friends">
            <h1>Friends</h1>
            <div className="friends-div">
                {store.getState().friends.map((element) => {
                    return <Friend userName={element.userName} key={element.id} id={element.id}/>  
                })}
            </div>
        </div>
    );
}

export default Friends;