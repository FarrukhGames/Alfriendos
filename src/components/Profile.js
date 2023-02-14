import Posts from './Posts';
import ProfileInfo from './ProfileInfo';
const Profile = (props) => {
    return (
        <div className="profile">
            <ProfileInfo/>
            <Posts/>
        </div>
    );
}

export default Profile;