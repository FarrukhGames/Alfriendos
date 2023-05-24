import Friend from './Friend'; 
import {useSelector} from 'react-redux';
const Friends = (props) => {
    const friends = useSelector((state) => {
        return state.profileReducer.friends
    });
    return (
        <div className="friends">
            <h1>Friends</h1>
            <div className="friends-div">
                {friends.map((element) => {
                    return <Friend friend={element} userName={element.userName} img={element.img} key={element.id} id={element.id} slug={element.slug}/>  
                })}
            </div>
        </div>
    );
}

export default Friends;