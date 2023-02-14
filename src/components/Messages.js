import Message from './Message'; 
import state from '../data/state';
const Messages = (props) => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
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
                    return <Message userName={element.userName} messages={element.messages} key={element.id}/>
                })}
                <form className="send" onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Имя"/>
                    <textarea placeholder="Напишите сообщение..."></textarea>
                    <br/>
                    <button type="submit">▶</button>
                </form>
            </div>
        </section>
    );
}

export default Messages;