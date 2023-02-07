import photo from '../images/profilimage.png';
const ProfileInfo = () => {
    return (
        <div className="profile-info">
            <img className="photo" src={photo}/>
            <h1 className="name">User</h1>
            <div className="user">
                <p><b>Имя</b>:User</p>
                <p><b>Дата рождение</b>: 29/08/2006</p>
                <p><b>Описание</b>: I am a new Allfriendos user</p>
                <p className="biography">Блогер</p>
            </div>
        </div>
    )
}

export default ProfileInfo;