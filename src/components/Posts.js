import Publication from './Publication'; 
import image from '../images/plage.jpg';
const Posts = () => {
    let publications = [
        {userName: "Farrukh", text: "Пляж, это наше всё 😃", img: image},
        {userName: "Leo Messi", text: "I WON THE WORLD CUP!!!" , img: image},
        {userName: "Elon Musk", text: "Я купил планету земля", img: image}
    ];
    return (
        <section className="posts">
            {/* <Publication userName={publications[0].userName} text={publications[0].text} img={publications[0].img}/>
            <Publication userName={publications[1].userName} text={publications[1].text} img={publications[1].img}/>
            <Publication userName={publications[2].userName} text={publications[2].text} img={publications[2].img}/> */}
            {publications.map((element) => {
                return <Publication userName={element.userName} text={element.text} img={element.img}/>  
            })}
        </section>
    );
}

export default Posts;