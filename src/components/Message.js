import {Link} from "react-router-dom";

const Message = (props) => {
    return (
        <div className="message-user">
            {/* <Link to={"/" + props.userName}>{props.userName ? props.userName : "user"}</Link> */}
            <Link to={`/${props.userName}`}>{props.userName ? props.userName : "user"}</Link>
            <p>{props.message ? props.message : ": message"}</p>
        </div>
    );
}

export default Message;