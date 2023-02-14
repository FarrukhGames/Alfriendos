import Message from './Message'; 
import {messages} from '../data/state';
const Messages = (props) => {
    return (
        <section className="message">
            <div className='names'>
                <button><Message userName="Farrukh"/></button>
                <button><Message/></button>
                <button><Message/></button>
            </div>
            <div className="messages">
                {messages.map((element) => {
                    return <Message userName={element.userName} messages={element.messages} key={element.id}/>
                })}
                <div className="send">
                    <textarea></textarea>
                    <br/>
                    <button>▶</button>
                </div>
            </div>
        </section>
    );
}

export default Messages;