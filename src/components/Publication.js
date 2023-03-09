// import {useState} from 'react';
import profilimage from '../images/profilimage.png';
import store from '../data/state';
// import {deletePost} from '../data/state';
const Publication = (props) => {
    const removePost = () => {
        const deletePost = store.deletePost.bind(store);
        deletePost(props.id);
    } 
    // let [number, setNumber] = useState(0);
    const likeNumber = () => {
        // setNumber(number + 1);
        const addLikes = store.addLikes.bind(store);
        addLikes(props.id);
    };
    return (
        <div className="publication">
            <button onClick={removePost} className="delete-post">🗑</button>
            <div className="publication-user">
                <img className="publication-user-photo" src={profilimage} alt="Пользователь"/>
                <h1>{props.userName ? props.userName : "user"}</h1>
            </div>
            <p>{props.text ? props.text : "text"}</p>
            <img className="publication-image" src={props.img} alt="Море с человеком"/>
            <div className="like">
                <p className="like-number">{props.like}</p>
                <button className="like-button" onClick={likeNumber}>👍</button>
            </div>
        </div>
    );
}

export default Publication;