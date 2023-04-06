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
            <img class="aurora" src={Aurora}/>
            <img class="pp" src={PoppyPlaytime}/>
            <img class="bs" src={BrawlStars}/>
            <img class="gta" src={GTA}/>
            <img class="sonic" src={SonicEYX}/>
            <img class="roblox" src={Roblox}/>
            <img class="minecraft" src={Minecraft}/>
            <img class="fnaf" src={Fnaf}/>
            <img class="csgo" src={Csgo}/>
            <img class="c3" src={Cossacks3}/>
        </div>
    );
}

export default Gallery;