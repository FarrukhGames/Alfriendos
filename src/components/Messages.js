import React,{useState} from 'react';
import Message from './Message'; 
import Peoples from './Peoples'; 
import store from '../data/state';
import {addMessageAC} from '../data/dialogeReducer';
// import {addMessage} from '../data/state';
const Messages = (props) => {
    const [name, setName] = useState("");
    let messageTextarea = React.createRef();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const dispatch = store.dispatch.bind(store);
        dispatch(addMessageAC(name, ": " + messageTextarea.current.value));
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
                {store.getState().dialogeReducer.messages.map((element) => {
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