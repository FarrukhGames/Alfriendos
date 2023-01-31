import Publication from './Publication'; 
import image from '../images/plage.jpg';
const Posts = () => {
    return (
        <section className="posts">
            <Publication userName="Farrukh" text="Пляж, это наше всё 😃" img={image}/>
            <Publication/>
        </section>
    );
}

export default Posts;