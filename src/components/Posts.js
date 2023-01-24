import plage from '../images/plage.jpg';
import profilimage from '../images/profilimage.png';
const Posts = () => {
    return (
        <section className="posts">
            <div className="publication">
                <div className="publication-user">
                    <img className="publication-user-photo" src={profilimage}/>
                    <h1>FarrukhGames</h1>
                </div>
                <p>Пляж, это наше всё 😃</p>
                <img className="publication-image" src={plage}/>
            </div>
        </section>
    );
}

export default Posts;