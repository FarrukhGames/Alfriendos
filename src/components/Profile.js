import Posts from './Posts';
import ProfileInfo from './ProfileInfo';
const profile = () => {
    return (
        <div className="profile">
            <ProfileInfo/>
            <Posts/>
        </div>
    );
}

export default profile;