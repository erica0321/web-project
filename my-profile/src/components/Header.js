import "../style/Header.css"
function Header(){

    return(
      <div className="Header">
        <div className="Left-Header">
            Profile
        </div>
        <div className="Right-Header">
            <ul className="HeaderList">
                <li id='home'>Home</li>
                <li id='about-me'>About me</li>
                <li id='experience'>Experiene</li>
                <li id='portfolio'>Portfolio</li>
                <li id='contact'>Contact</li>
            </ul>
        </div> 
        <hr className="HeaderLine" />
  </div>
    )
}

export default Header;
