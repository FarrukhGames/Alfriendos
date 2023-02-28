import React,{useState} from 'react';
import Message from './Message'; 
import state from '../data/state';
import {addMessage} from '../data/state';
const Messages = (props) => {
    let [name, setName] = useState("");
    let messageTextarea = React.createRef();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        addMessage(name, messageTextarea.current.value);
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    return (
        <section className="message">
            <div className='names'>
                <button><Message userName="Farrukh"/></button>
                <button><Message/></button>
                <button><Message/></button>
            </div>
            <div className="messages">
                {state.messages.map((element) => {
                    return <Message userName={element.userName} message={element.message} key={element.id}/>
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