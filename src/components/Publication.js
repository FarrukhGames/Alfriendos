import profilimage from '../images/profilimage.png';
const Publication = (props) => {
    console.log(props)
    return (
        <div className="publication">
            <div className="publication-user">
                <img className="publication-user-photo" src={profilimage}/>
                <h1>{props.userName ? props.userName : "user"}</h1>
            </div>
            <p>{props.text ? props.text : "text"}</p>
            <img className="publication-image" src={props.img}/>
        </div>
    );
}

export default Publication;