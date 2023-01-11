import "./Header.css"
import { socialIcon } from "../../constants/icons";

function Header(props){
    window.addEventListener('load', ()=>{
        document.getElementById('Header').style.paddingTop = document.getElementById('Navbar').offsetHeight+16+"px";
    })
    window.addEventListener('resize', ()=>{
        document.getElementById('Header').style.paddingTop = document.getElementById('Navbar').offsetHeight+16+"px";
    })
    const phone = []
    const email = []
    props.phone.forEach((number)=>{
        phone.push(
            <a className="contact-link" key={`tel+${number.length}`} href={"tel:"+number}>
                <i className={socialIcon["phone"]}></i><span>{number}</span>
            </a>
        )
    })
    props.email.forEach((mail)=>{
        email.push(
            <a className="contact-link" key={`tel+${mail.length}`} href={"mailto:"+mail}>
                <i className={socialIcon["email"]}></i><span>{mail}</span>
            </a>
        )
    })
    return(
        <header className="header" id="Header">
            <div className="d-flex">{phone}{email}</div>
        </header>
    )
}

export default Header;