import "../style/Experience.css"
import title from "../img/title_experience.png"
import experience from "../img/experience.png"

function Experience() {
    return(
        <div className="Experience-back">
            <div className="Experience">
                <div className="Title">
                    <img src={title} alt="Experience" />
                </div>
                <div className="Content-Ex">
                    <img src={experience} alt="Timeline"></img>
                </div>
            </div>
        </div>
    );
}

export default Experience;