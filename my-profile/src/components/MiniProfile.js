import Myimg from "../img/myImage.png"
import Github from "../img/github.png"
import Gmail from "../img/gmail.png"
import Velog from "../img/velog.png"
import Notion from "../img/notion.png"
import "../style/MiniProfile.css"

function MiniProfile(){
    return(
        <div className="Mini-Profile">
            <img className="My-Image" src={Myimg} alt="me"></img>
            <div className="ShortWord">
                <div className="MyName">Hyun Ah Rho</div>
                <div className="MyJob">I'm a front-end developer</div>
            </div>
            <hr className="ShortLine" />
            <div className="Profile-Btn">
                <ul className="Btn-List">
                    <li id="github"><img src={Github} alt="GithubLink"/></li>
                    <li id="notion"><img src={Notion} alt="NotionLink"/></li>
                    <li id="gmail"><img src={Gmail} alt="GmailLink"/></li>
                    <li id="velog"><img src={Velog} alt="VelogLink"/></li>
                </ul>
            </div>

            <div className="Scroll-Down">
                Scroll Down
            </div>
        </div>
    )
}


export default MiniProfile;
