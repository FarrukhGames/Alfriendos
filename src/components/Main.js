import './Main.css';
import photo from '../images/profilimage.png';
import plage from '../images/plage.jpg';

const Main = () => {
    return (
        <main className="main">
            <article className="navigation">
                <a href="#" className="Profil">Профиль</a>
                <a href="#" className="Message">Сообщения</a>
                <a href="#" className="Friends">Друзья</a>
                <a href="#" className="Find-friends">Поиск друзей</a>
                <a href="#" className="Reels">Allfriendos Clips</a>
                <a href="#" className="History">Истории</a>
                <a href="#" className="Photos">Фото</a>
                <a href="#" className="Favorites">Избранное</a>
            </article>
            <article className="info">
                <div className="profil">
                    <img className="photo" src={photo}/>
                    <h1 className="Name">User</h1>
                    <p className="User">
                        <b>Имя</b>:User
                        <br/>  
                        <b>Дата рождение</b>: 29/08/2006
                        <br/>
                        <b>Описание</b>: I am a new Allfriendos user
                        <br/>
                        <span className="biography">Блогер</span>
                    </p>
                </div>
                <div className="publication">
                    <div className="userspost">
                        <img className="photo" src={photo}/>
                        <h1>FarrukhGames</h1>
                    </div>
                    <p>Пляж, это наше всё 😃</p>
                    <div className="center">
                        <img className="plage" src={plage}/>
                    </div>
                </div>
            </article>   
        </main>
    );
}

export default Main;