import {NavLink} from 'react-router-dom';
let nav;
const Friend = (props) => {
    nav = "/" + props.userName;
    return (
        <div className="friend">
            <NavLink to={nav}>
                <img className="publication-user-photo" src={props.img} alt="Пользователь"/>
                <p>{props.userName ? props.userName : "user"}</p>
            </NavLink>
        </div>
    );
}

export default Friend;