import "./AboutStyles.css"
import AboutCompany from "../../components/AboutCompany/AboutCompany"
import HeroAbout from "../../components/Hero/Hero"
import WhyChoose from "../../components/WhyChoose/WhyChoose"
import { useState, useEffect } from "react";
const About= () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <HeroAbout title="About Us" page="About"/>
            <AboutCompany />
            <Video />
            <WhyChoose />
        </div>
    )
}

const Video = () => {
    const [videoClicked, setVideoClicked] = useState(false);
    return (
        <div className="about-video-container">  
            <div className="about-video-text">
                <h1>Saja provides unique and authentic agency solution</h1>
                <button onClick={() => setVideoClicked(!videoClicked)}><i className="fas fa-play"></i></button>
            </div>
            {videoClicked && <div className="video-youtube">
            <div className="video">
                <iframe  src="https://www.youtube.com/embed/jdkWIdJobSA?autoplay=0&mute=0&controls=0&origin=https%3A%2F%2Fsaja-react.vercel.app&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&widgetid=1" />
                <p onClick={() => setVideoClicked(!videoClicked)}>&#x2716;</p>
            </div>
            </div>}
        </div>
    )
}

export default About;