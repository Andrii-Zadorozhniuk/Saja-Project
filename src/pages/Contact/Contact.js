import HeroAbout from "../../components/Hero/Hero"
import { useEffect } from "react"
import "./ContactStyles.css"
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        
        <div>
            <HeroAbout title="Contact Us" page="Contact"/>
        <div className="contact-section">
            <div className="contact-data">
                <ContactInfo icon="fa fa-phone" h="Phone" p1="(+88) 487 - 365 - 254" p2="(+88) 587 - 698 - 202" />
                <ContactInfo icon="fa fa-envelope" h="Email" p1="info@example.com" p2="career@example.com" />
                <ContactInfo icon="fa fa-globe" h="Location" p1="56785 Brainson Street " p2="New York, USA"/>
            </div>
                
            <div className="contact-us">
            <form>
            <h1>Get in Touch</h1>
            <p style={{display: "none"}}>Your email address will not be published.</p>
            <div>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
            </div>
            <input type="text" placeholder="Subject"/>
            <textarea type="text" placeholder="Message"/>
            <input type="submit" value="Submit" className="submit"/>
            </form>
            </div>
        </div>
        <div className="map-contact">
        <iframe className="map-contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d774382.6761693481!2d-74.02362600000001!3d40.69748800000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1683636310635!5m2!1sen!2sbd" />
        </div>
        </div>
       
    )
}
const ContactInfo = (props) => {
    return (
        <div className="contact-info">
            <i className={props.icon}></i>
            <div className="contact-info-text">
                <h2>{props.h}</h2>
                <a>{props.p1}</a>
                <a>{props.p2}</a>
            </div>
        </div>
    )
}
export default Contact;