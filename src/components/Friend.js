import profilimage from '../images/profilimage.png';
const Friend = (props) => {
    return (
        <div className="friend">
            <img className="publication-user-photo" src={profilimage} alt="Пользователь"/>
            <p>{props.userName ? props.userName : "user"}</p>
        </div>
    );
}

export default Friend;