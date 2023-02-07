import Message from './Message'; 
const Messages = (props) => {
    let messages = [
        {userName: "Farrukh", message: ": Пляж, это наше всё 😃", id: 1},
        {userName: "Mojang", message: ": Minecraft 1.20.0 скоро выйдет", id: 2},
        {userName: "Roblox", message: ": Мы блокируем игру так как нас взломали :(", id: 3}
    ];
    return (
        <section className="message">
            <div className='names'>
                <button><Message userName="Farrukh"/></button>
                <button><Message/></button>
                <button><Message/></button>
            </div>
            {messages.map((element) => {
                return <Message userName={element.userName} message={element.message} key={element.id}/>
            })}
			<textarea></textarea>
            <br/>
            <button>Отправить</button>
        </section>
    );
}

export default Messages;