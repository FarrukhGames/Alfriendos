import {Link, NavLink} from 'react-router-dom';
const Navigation = () => {
    return (
        <nav className="navigation">
            <NavLink to="/profile">Профиль</NavLink>
            <NavLink to="/messages">Сообщения</NavLink>
            <a href="#">Друзья</a>
            <a href="#">Поиск друзей</a>
            <a href="#">Allfriendos Clips</a>
            <a href="#">Истории</a>
            <NavLink to="/posts">Посты</NavLink>
            <NavLink to="/counter">Счётчик</NavLink>
            <a href="#">Избранное</a>
        </nav>
    );
}

export default Navigation;