import Aurora from "../images/aurora.jpg";
import PoppyPlaytime from "../images/PP.jpg";
import BrawlStars from "../images/BS.jpg";
import GTA from "../images/GTASA.jpg";
import Roblox from "../images/Roblox.jpg";
import SonicEYX from "../images/SonicEYX.jpg";
import Minecraft from "../images/minecraft.jpg";
import Fnaf from "../images/fnaf.jpg";
import Csgo from "../images/csgo.jpg";
import Cossacks3 from "../images/cossacks3.jpg";
const Gallery = (props) => {
    return (
        <div className="gallery">
            <img className="aurora" src={Aurora}/>
            <img className="pp" src={PoppyPlaytime}/>
            <img className="bs" src={BrawlStars}/>
            <img className="gta" src={GTA}/>
            <img className="sonic" src={SonicEYX}/>
            <img className="roblox" src={Roblox}/>
            <img className="minecraft" src={Minecraft}/>
            <img className="fnaf" src={Fnaf}/>
            <img className="csgo" src={Csgo}/>
            <img className="c3" src={Cossacks3}/>
        </div>
    );
}

export default Gallery;