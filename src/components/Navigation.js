import {NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/">Профиль</NavLink>
            <NavLink to="/messages">Сообщения</NavLink>
            <a href="#">Друзья</a>
            <NavLink to="/findFriends">Поиск друзей</NavLink>
            <a href="#">Allfriendos Clips</a>
            <a href="#">Истории</a>
            <NavLink to="/posts">Посты</NavLink>
            <NavLink to="/counter">Счётчик</NavLink>
            <NavLink to="/gallery">Галерея</NavLink>
        </nav>
    );
}

export default Navigation;