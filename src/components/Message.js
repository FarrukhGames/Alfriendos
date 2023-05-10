import {Link} from "react-router-dom";
import store from '../data/state';
import {deleteMessageAC} from '../data/dialogeReducer';
import {useDispatch} from 'react-redux';
// import {deleteMessage} from '../data/state';

const Message = (props) => {
    let dispatch = useDispatch();
    const removeMessage = () => {
        dispatch(deleteMessageAC(props.id));
    } 
    return (
        <div className="message-user">
            {/* <Link to={"/" + props.userName}>{props.userName ? props.userName : "user"}</Link> */}
            <Link to={`/${props.userName}`}>{props.userName ? props.userName : "user"}</Link>
            <p>{props.message ? props.message : ": message"}</p>
            <button onClick={removeMessage} className="delete-message">🗑</button>
        </div>
    );
}

export default Message;