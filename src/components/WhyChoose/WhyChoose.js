import "./WhyChooseStyles.css"
import { useState } from "react";
const WhyChoose = () => {
    const [videoClicked, setVideoClicked] = useState(false);
    return (
        <div className="why-choose">
            <div className="why-choose-text-container">
                <p> <span>Why Choose Us</span></p>
                <h1>We ensure the best solution for you</h1>
                <Item icon="fa-solid fa-user-group" title="User Friendly" desc="Experiences that keep your customers coming back for more services Makes best effort."/>
                <Item icon="fa-solid fa-file-shield" title="Trusted & Secured" desc="Experiences that keep your customers coming back for more services Makes best effort." />
                <Item icon="fa-solid fa-comments" title="24/7 Fast Support" desc="Experiences that keep your customers coming back for more services Makes best effort." />
            </div>
            <div className="why-choose-video">
                <div className="img1">
                    <img src="https://saja-react.vercel.app/assets/img/about/choose-1.png" />
                </div>
                <div className="img2">
                    <img src="https://saja-react.vercel.app/assets/img/about/choose-2.png" />
                    <img src="https://saja-react.vercel.app/assets/img/about/choose-3.png" />
                    <button className="video-btn" onClick={() => setVideoClicked(!videoClicked)}><i className="fas fa-play"></i></button>
                </div>
                <img src="https://saja-react.vercel.app/assets/img/shape/choose-shape-2.png" className="img-background" />
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
const Item = (props) => {
    return (
        <div className="why-choose-item">
            <i className={`${props.icon} icon-offer`}></i>
            <div>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            </div>
        </div>
    )
}
export default WhyChoose;