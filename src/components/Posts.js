import Publication from './Publication'; 
const Posts = (props) => {
    return (
        <section className="posts">
            {/* <Publication userName={publications[0].userName} text={publications[0].text} img={publications[0].img}/>
            <Publication userName={publications[1].userName} text={publications[1].text} img={publications[1].img}/>
            <Publication userName={publications[2].userName} text={publications[2].text} img={publications[2].img}/> */}
            {props.publications.map((element) => {
                return <Publication userName={element.userName} text={element.text} img={element.img} key={element.id}/>  
            })}
        </section>
    );
}

export default Posts;