const Peoples = (props) => {
    return (
        <div className="message-user">
            {/* <Link to={"/" + props.userName}>{props.userName ? props.userName : "user"}</Link> */}
            <p>{props.userName ? props.userName : "user"}</p>
        </div>
    );
}

export default Peoples;