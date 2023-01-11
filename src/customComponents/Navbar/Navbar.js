import 'remixicon/fonts/remixicon.css'
import { socialIcon } from "../../constants/icons";
import "./Navbar.css"

function Navbar(props){
    const options = []
    const socialIcons = []
    props.menuOptions.forEach((option)=>{
        options.push(<li key={option}><a href={"#"+option}>{option}</a></li>)
    });

    if(props.socialOptions){
        props.socialOptions.forEach((option)=>{
            socialIcons.push(
            <li key={socialIcon[Object.keys(option)[0]]}>
                <a target="_blank" rel='noreferrer' href={Object.values(option)[0]}>
                    <i className={socialIcon[Object.keys(option)[0]]}></i>
                </a>
            </li>)
        })
    }

    return(
        <nav className="d-flex navbar" id='Navbar'>
            <div className='logo-container'><a href='/'><img src={props.logo} className="logo" alt="Brand Logo"/></a></div>
            <ul className="d-flex menu">{options}</ul>
            {props.socialOptions? <ul className="d-flex menu">{options}</ul> : null}
        </nav>
    )
}

export default Navbar;