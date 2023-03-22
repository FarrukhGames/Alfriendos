const Friend = (props) => {
    return (
        <div className="friend">
            <img className="publication-user-photo" src={props.img} alt="Пользователь"/>
            <p>{props.userName ? props.userName : "user"}</p>
        </div>
    );
}

export default Friend;