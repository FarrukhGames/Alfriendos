const Message = (props) => {
    return (
        <div className="message-user">
            <h1>{props.userName ? props.userName : "user"} :</h1>
            <p>{props.message ? props.message : "message"}</p>
        </div>
    );
}

export default Message;