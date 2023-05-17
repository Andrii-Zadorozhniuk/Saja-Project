import "./AboutCompanyStyles.css"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import {useState} from "react";
const AboutCompany = () =>{
    const [counterOn, setCounterOn] = useState(false);
    return (
        <div className="about-company-full">
        <div className="about-company">
            <div className="images">
            <img src={require('../../images/about-img-1.jpg')} className="img1"/>
            <img src={require('../../images/about-img-2.jpg')} className="img2" />
            <img src="https://saja-react.vercel.app/assets/img/shape/about-shape-1.png" className="triangle1" />
            <img src="https://saja-react.vercel.app/assets/img/shape/choose-shape-2.png" className="dots" />
            </div>
            <div className="about-company-text-container">
                <p><span>About Company</span></p>
                <h1>We make creative plane for agency solution</h1>
                <p>Always recognize that your blog's primary purpose is marketing and driving new traffic to buy from you. While you do want to inform, and in some cases entertain agency. Spark creativity and craft beautiful store experiences with design tools that you want.</p>
                <button>Know More</button>
            </div>
        </div>
        <ScrollTrigger className="scroll-trigger" onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            
        <div className="numbers">
            <div className="number">
            {counterOn &&<h1><CountUp start={0} end={50} duration={3} />K+</h1>}
            <p>Global Happy Clients</p>
            </div>
            <div className="number">
            {counterOn &&<h1><CountUp start={0} end={80} duration={3} />K+</h1>}
            <p>Project Completed</p>
            </div>
            <div className="number">
            {counterOn &&<h1><CountUp start={0} end={30} duration={3} />K+</h1>}
            <p>Creative Designers</p>
            </div>
            <div className="number">
            {counterOn &&<h1><CountUp start={0} end={30} duration={3} />K+</h1>}
            <p>Awards Winner</p>
            </div>
        </div>
        </ScrollTrigger>
        </div>
    )
}
export default AboutCompany;