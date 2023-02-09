import Message from './Message'; 
const Messages = (props) => {
    return (
        <section className="message">
            <div className='names'>
                <button><Message userName="Farrukh"/></button>
                <button><Message/></button>
                <button><Message/></button>
            </div>
            <div className="messages">
                {props.messages.map((element) => {
                    return <Message userName={element.userName} message={element.message} key={element.id}/>
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