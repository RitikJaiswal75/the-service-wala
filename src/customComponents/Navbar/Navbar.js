import "remixicon/fonts/remixicon.css";
import { socialIcon } from "../../constants/icons";
import "./Navbar.css";
import Hamburger from 'hamburger-react'

function Navbar(props) {
  const options = [];
  const socialIcons = [];
  props.menuOptions.forEach((option) => {
    options.push(
      <li key={option}>
        <a href={"#" + option}>{option}</a>
      </li>
    );
  });

  if (props.socialOptions) {
    props.socialOptions.forEach((option) => {
      socialIcons.push(
        <li key={socialIcon[Object.keys(option)[0]]}>
          <a target="_blank" rel="noreferrer" href={Object.values(option)[0]}>
            <i className={socialIcon[Object.keys(option)[0]]}></i>
          </a>
        </li>
      );
    });
  }

  //mobile view navbar code
  function checkMediaQuery() {
    var showhide = document.getElementById('hide');
    if (window.innerWidth > 400) {
      showhide.style.display = "flex";
    }
  }
  

  window.addEventListener('resize', checkMediaQuery);

  function myFunction() {
  var showhide = document.getElementById('hide');
    
    if (showhide.style.display === "grid") {
      showhide.style.display = "none";
    }
    else {
      showhide.style.display = "grid";
    } 

  }

  return (
    <nav className="d-flex navbar" id="Navbar">

      <div className="logo-container">
        <a href="/">
          <img src={props.logo} className="logo" alt="Brand Logo" />
        </a>
      </div>
      <div id="cross" onClick={myFunction}>
        <Hamburger />
      </div>
      <ul className="d-flex menu" id="hide">{options}</ul>
      {props.socialOptions ? <ul className="d-flex menu">{options}</ul> : null}
    </nav>
  );
}

export default Navbar;
