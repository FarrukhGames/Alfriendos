import Posts from './Posts';
import FriendPage from './FriendPage';
import Friends from './Friends';
const Profile = (props) => {
    return (
        <div className="profile">
            <FriendPage/>
            <Friends/>
            <Posts/>
        </div>
    );
}

export default Profile;