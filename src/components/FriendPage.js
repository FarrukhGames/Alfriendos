import photo from '../images/profilimage.png';
import {useParams} from 'react-router-dom';
const FriendPage = (props) => {
    let params = useParams();
    return (
        <div className="friend-page">
            <div className="profile-info">
                <img className="photo" src={photo}/>
                <h1 className="name">{params.friendPage}</h1>
                <div className="user">
                    <p><b>Имя</b>:{params.friendPage}</p>
                    <p><b>Дата рождение</b>: 29/08/2006</p>
                    <p><b>Описание</b>: I am a new Allfriendos user</p>
                    <p className="biography">Блогер</p>
                </div>
            </div>
        </div>
    );
}

export default FriendPage;