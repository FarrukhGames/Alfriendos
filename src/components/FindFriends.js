import Friends from './Friends'; 
import ProfileInfo from './ProfileInfo'; 
const FindFriends = () => {
    return (
        <div class="find-friends-main">
            <div className="find-friends-div">
                <input className="find-friends-input" placeholder="Найти друзей"/>
                <p>🔍</p>
            </div>
            <div className="friends-profile">
                <Friends/>
                <ProfileInfo/>     
            </div>
        </div>
        
    );
}

export default FindFriends; 