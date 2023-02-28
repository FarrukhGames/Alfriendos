import React,{useState} from 'react';
import Publication from './Publication'; 
import state from '../data/state';
import {addPost} from '../data/state';

const Posts = () => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    // let nameInput = React.createRef();
    // let textTextarea = React.createRef();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        addPost(name, text);
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const textChangeHandler = (event) => {
        setText(event.target.value)
    }
    return (
        <section className="posts">
            <div className="new-post">
                <h1>Новый Пост</h1>
                <form className="post" onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Имя" value={name} onChange={nameChangeHandler}/>
                    <textarea placeholder="Напишите Текст..." value={text} onChange={textChangeHandler}></textarea>
                    <br/>
                    <button type="submit">Запостить</button>
                </form>
            </div>
            {state.publications.map((element) => {
                return <Publication userName={element.userName} text={element.text} img={element.img} key={element.id} id={element.id}/>  
            })}
        </section>
    );
}

export default Posts;