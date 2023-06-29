import {NavLink} from 'react-router-dom';
const Navigation = (props) => {
    return (
        <nav className="navigation">
            <NavLink className="navigation__link" to="/">Профиль</NavLink>
            <NavLink className="navigation__link" to="/messages">Сообщения</NavLink>
            <a className="navigation__link" href="#">Друзья</a>
            <NavLink className="navigation__link" to="/findFriends">Поиск друзей</NavLink>
            <a className="navigation__link" href="#">Allfriendos Clips</a>
            <a className="navigation__link" href="#">Истории</a>
            <NavLink className="navigation__link" to="/posts">Посты</NavLink>
            <NavLink className="navigation__link" to="/counter">Счётчик</NavLink>
            <NavLink className="navigation__link" to="/gallery">Галерея</NavLink>
            {props.isAuthenticated && <NavLink className="navigation__link" to="/profile ">Профиль</NavLink>}
            {props.isAuthenticated && <button className="navigation__link" onClick={props.logoutFunction}>Выйти из аккаунта</button>}
            {!props.isAuthenticated && <button className="navigation__link navigation__show-modal" onClick={props.showModalFunction}>Log In</button>}
        </nav>
    );
}

export default Navigation;