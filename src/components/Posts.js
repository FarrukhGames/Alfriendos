import React,{useState} from 'react';
import Publication from './Publication'; 
import store from '../data/state';
// import {addPost} from '../data/state';
const Posts = () => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    // let nameInput = React.createRef();
    // let textTextarea = React.createRef();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        const addPost = store.addPost.bind(store);
        addPost(name, text);
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const textChangeHandler = (event) => {
        setText(event.target.value)
    }
    const addFile = (event) => {
        setImage(URL.createObjectURL(event.target.files[0]));
        console.log(image);
    }
    return (
        <section className="posts">
            <div className="new-post">
                <h1>Новый Пост</h1>
                <form className="post" onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Имя" value={name} onChange={nameChangeHandler}/>
                    <textarea placeholder="Напишите Текст..." value={text} onChange={textChangeHandler}></textarea>
                    <input type="file" onChange={addFile}/>
                    <br/>
                    <button type="submit">Запостить</button>
                </form>
                <img src={image}/>
            </div>
            {store.state.publications.map((element) => {
                return <Publication userName={element.userName} text={element.text} img={element.img} key={element.id} id={element.id} like={element.like}/>  
            })}
        </section>
    );
}

export default Posts;