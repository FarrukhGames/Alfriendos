import profilimage from '../images/profilimage.png';
import {deletePost} from '../data/state'
const Publication = (props) => {
    const removePost = () => {
        deletePost(props.id);
    } 
    return (
        <div className="publication">
            <button onClick={removePost} className="delete-post">🗑</button>
            <div className="publication-user">
                <img className="publication-user-photo" src={profilimage}/>
                <h1>{props.userName ? props.userName : "user"}</h1>
            </div>
            <p>{props.text ? props.text : "text"}</p>
            <img className="publication-image" src={props.img}/>
        </div>
    );
}

export default Publication;