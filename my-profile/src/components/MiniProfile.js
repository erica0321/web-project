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
                    <li id="github">
                        <a href="https://github.com/erica0321" rel="noreferrer" target="_blank" >
                            <img src={Github} alt="GithubLink"/>
                        </a>
                    </li>
                    <li id="notion">
                        <a href="https://www.notion.so/d1fd1781184747e59b180110fcfbcdea?v=9d954c41f00a4f8aab9961d787674df9&pvs=4" rel="noreferrer" target="_blank">
                            <img src={Notion} alt="NotionLink"/>
                        </a>
                    </li>
                    <li id="gmail">
                        <a href="mailto:erica0321@hufs.ac.kr" >
                            <img src={Gmail} alt="GmailLink"/>
                        </a>
                    </li>
                    <li id="velog">
                        <a href="https://velog.io/@erica0321" rel="noreferrer" target="_blank">
                            <img src={Velog} alt="VelogLink" />
                        </a>
                    </li>
                </ul>
            </div>

            <div className="Scroll-Down">
                Scroll Down
            </div>
        </div>
    )
}


export default MiniProfile;
