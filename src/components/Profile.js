import Posts from './Posts';
import ProfileInfo from './ProfileInfo';
import Friends from './Friends';
const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo/>
            <Friends/>
            <Posts/>
        </div>
    );
}

export default Profile;