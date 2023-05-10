import React,{useState} from 'react';
import Publication from './Publication'; 
import {addPostAC} from '../data/profileReducer';
import {useDispatch, useSelector} from 'react-redux';
// import {addPost} from '../data/state';
const Posts = () => {
    const publications = useSelector((state) => {
        return state.publications
    });
    let dispatch = useDispatch();
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [img, setImage] = useState(null);
    const [fileName, setFileName] = useState("")
    // let nameInput = React.createRef();
    // let textTextarea = React.createRef();
    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(addPostAC(name, text, img));
        setText("")
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }
    const textChangeHandler = (event) => {
        setText(event.target.value)
    }
    const addFile = (event) => {
        console.log(event.target.files);
        setImage(URL.createObjectURL(event.target.files[0]));
        setFileName(event.target.files[0].name);
    }
    return (
        <section className="posts">
            <div className="new-post">
                <h1>Новый Пост</h1>
                <form className="new-post-form" onSubmit={onSubmitHandler}>
                    <input type="text" placeholder="Имя" value={name} onChange={nameChangeHandler}/>
                    <textarea className="new-post-textarea" placeholder="Напишите Текст..." value={text} onChange={textChangeHandler}></textarea>
                    <input className="new-post-file-input" type="file" onChange={addFile} data-text={(fileName === "") ? "Файл не выбран" : fileName}/>
                    <br/>
                    <button type="submit">Запостить</button>
                </form>
                <img src={img}/>
            </div>
            {publications.map((element) => {
                return <Publication userName={element.userName} text={element.text} img={element.img} key={element.id} id={element.id} like={element.like}/>  
            })}
        </section>
    );
}

export default Posts;