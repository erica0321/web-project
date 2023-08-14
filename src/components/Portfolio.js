import "../style/Portfolio.css"
import title from "../img/title_portfolio.png"
import port1 from "../img/port1.png"
import port2 from "../img/port2.png"
import port3 from "../img/port3.png"
import port45 from "../img/port45.png"

function Portfolio(){
    return(
        <div className="Portfolio-background">
            <div className="Portfolio">
                <div className="Title">
                <img src={title} alt="Experience" />
            </div>
            <div className="Content-Port">
                <img src={port1} alt="Portfolio"></img>
            </div>
            <div className="Content-Port">
                <img src={port2} alt="Portfolio"></img>
            </div>
            <div className="Content-Port">
                <img src={port3} alt="Portfolio"></img>
            </div>
            <div className="Content-Port">
                <img src={port45} alt="Portfolio"></img>
            </div>
            <div className="Content-Port-Add">
                업데이트중입니다.
            </div></div>
        </div>
    );
}

export default Portfolio;