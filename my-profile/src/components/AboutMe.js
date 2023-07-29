import Title from "../img/title_about.png"
import MiniProfile2 from "../img/myImage2.png"
import Bubble from "../img/speech_bubble.png"
import "../style/AboutMe.css"

function AboutMe() {
    return(
        <div className="Aboutme">
            <div className="About">
                <div className="TitleImg">
                    <img src={Title} alt="AboutMe" />
                </div>
                <div className="Information1">
                    <img id="img2" src={MiniProfile2} alt="MiniProfile2" />
                    <img id="bubble" src={Bubble} alt="InfoBubble" />
                </div>
                <div className="Information2">
                    <ul className="InfoList">
                        <li id="info">
                            <div className="Title">
                                Info
                            </div>
                            <hr className="ShortLine1"/>
                            <div className="Content">
                                <ul className="List">
                                    <li id="list-content">
                                        ☎️ +82 10-xxxx-xxxx
                                    </li>
                                    <li id="list-content">
                                        ✉️ xxxx0321@gmail.com
                                    </li>
                                    <li id="list-content">
                                        🏠 성남시 수정구
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li id="certification">
                            <div className="Title">
                                Certification
                            </div>
                            <hr className="ShortLine2"/>
                            <div className="Content">
                                <ul className="List">
                                    <li id="list-content">
                                        자동차운전면허증 2종
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li id="education">
                            <div className="Title">
                                Education
                            </div>
                            <hr className="ShortLine3"/>
                            <div className="Content">
                                <ul className="List">
                                    <li id="list-content">
                                        분당중앙고등학교
                                    </li>
                                    <li id="list-content">
                                        한국외국어대학교 정보통신공학과
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li id="lanuage">
                            <div className="Title">
                                Language Skill
                            </div>
                            <hr className="ShortLine4"/>
                            <div className="Content">
                                <ul className="List">
                                    <li id="list-content">
                                        TOEIC 880
                                    </li>
                                </ul>
                            </div></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default AboutMe;