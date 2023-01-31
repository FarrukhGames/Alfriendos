import {Link, NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/Profile" className="Profil">Профиль</NavLink>
            <NavLink to="/messages" className="Message">Сообщения</NavLink>
            <a href="#" className="Friends">Друзья</a>
            <a href="#" className="Find-friends">Поиск друзей</a>
            <a href="#" className="Reels">Allfriendos Clips</a>
            <a href="#" className="History">Истории</a>
            <NavLink to="/Posts" className="Post">Фото</NavLink>
            <a href="#" className="Favorites">Избранное</a>
        </nav>
    );
}

export default Navigation;