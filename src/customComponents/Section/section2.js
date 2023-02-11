import React from "react";
import "./Section.css";
function Section2(props) {

    return (
        <section className="content" id={props.name}>
            <h1>{props.name}</h1>
            <h2>{props.short_description}</h2>

            <div className="icons">
                <a href="mailto:vnelectrix@gmail.com">
                    <div className="block1">
                    <img src="assets/icon1.jpg" alt="icon"></img>
                    <a href="mailto:vnelectrix@gmail.com">vnelectrix@gmail.com</a>
                </div></a>

                <a href="http://maps.google.com/?q=VN Electrix (theservicewala), Besides, Naini, Prayagraj, Uttar Pradesh">
                    <div className="block1">
                    <img src="assets/icon2.jpg" alt="icon"></img>
                    <p>LIG-27, Near to Akshayvat Hospital, ADA Colony Naini Prayagraj-211009</p>
                </div></a>

                <a href="tel:+919810863934">
                    <div className="block1">
                    <img src="assets/icon3.jpg" alt="icon"></img>
                    <a href="tel:+919810863934">919810863934</a>
                </div></a>
            </div>

            <div className="commu">
            <a href="https://wa.me/+919810863934?text=Hello,%0AI%20am%20from%20the%20service%20wala,%20we%20are%20here%20to%20help%20you.%20Feel%20free%20to%20contact%20we%20are%20always%20available%2024X7.%20">
            <div className="whats">
                <a aria-label="Chat on WhatsApp" href="https://wa.me/+919810863934?text=Hello,%0AI%20am%20from%20the%20service%20wala,%20we%20are%20here%20to%20help%20you.%20Feel%20free%20to%20contact%20we%20are%20always%20available%2024X7.%20"> <img alt="Chat on WhatsApp" src="assets/What.png" /></a>
                <p>24X7 Online Support</p>   
            </div></a>
                <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.6699945768046!2d81.87184681498621!3d25.382374283810382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39854bddff5b556f%3A0xe7a7a6e4d8b4175e!2sVN%20Electrix%20(theservicewala)!5e0!3m2!1sen!2sin!4v1676039213106!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p>location On Map</p>
                </div>
                
            </div>
        </section>
    );
}

export default Section2;