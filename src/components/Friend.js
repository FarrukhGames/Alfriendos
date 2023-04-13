import {NavLink} from 'react-router-dom';
const Friend = (props) => {
    let link = "/" + props.slug;
    return (
        <div className="friend">
            <NavLink to={link}>
                <img className="publication-user-photo" src={props.img} alt="Пользователь"/>
                <p>{props.userName ? props.userName : "user"}</p>
            </NavLink>
        </div>
    );
}

export default Friend;