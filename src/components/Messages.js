import React,{useState} from 'react';
import Message from './Message'; 
import Peoples from './Peoples'; 
import store from '../data/state';
// import {addMessage} from '../data/state';
const Messages = (props) => {
    let [name, setName] = useState("");
    let messageTextarea = React.createRef();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const dispatch = store.dispatch.bind(store);
        dispatch({type: "ADD_MESSAGE", name, message: ": " + messageTextarea.current.value});
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    return (
        <section className="message">
            <div className='names'>
                <button><Peoples userName="Farrukh"/></button>
                <button><Peoples/></button>
                <button><Peoples/></button>
            </div>
            <div className="messages">
                {store.getState().messages.map((element) => {
                    return <Message userName={element.userName} message={element.message} key={element.id} id={element.id}/>
                })}
                <form className="send" onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Имя" value={name} onChange={nameChangeHandler}/>
                    <textarea placeholder="Напишите сообщение..." ref={messageTextarea}></textarea>
                    <br/>
                    <button type="submit">▶</button>
                </form>
            </div>
        </section>
    );
}

export default Messages;