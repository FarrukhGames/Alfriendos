import {useParams} from 'react-router-dom';
import store from '../data/state';
let friend;
const FriendPage = (props) => {
    let params = useParams();
    console.log(params);
    if (params.friendPage) {
        friend = store.getState().profilePage.friends.find((person) => {
            return person.slug === params.friendPage;
        });
    } else {
        friend = store.getState().profilePage.friends.find((person) => {
            return person.slug === "user";
        });
    }
    return (
        <div className="friend-page">
            <div className="profile-info">
                <img className="photo" src={friend.img} alt="Картинка"/>
                <h1 className="name">{friend.userName}</h1>
                <div className="user">
                    <p><b>Имя</b>:{friend.userName}</p>
                    <p><b>Дата рождение</b>: {friend.birthday}</p>
                    <p className="biography">{friend.bio}</p>
                </div>
            </div>
        </div>
    );
}

export default FriendPage;