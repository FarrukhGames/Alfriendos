import Message from './Message'; 
const Messages = (props) => {
    return (
        <section className="message">
            <Message userName="Farrukh" message="Пляж, это наше всё 😃"/>
            <Message/>
            <Message/>
			<textarea></textarea>
            <br/>
            <button>Отправить</button>
        </section>
    );
}

export default Messages;