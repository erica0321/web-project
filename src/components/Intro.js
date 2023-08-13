import Header from "./Header"
import MiniProfile from "./MiniProfile"
import AboutMe from './AboutMe'

import "../style/Intro.css"
function Intro() {
  return (
    <div className="Intro">
        <Header />
        <MiniProfile />
    </div>
  );
}

export default Intro;
