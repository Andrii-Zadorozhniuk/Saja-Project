import HeroAbout from "../../components/Hero/Hero";
import "./AboutMeStyles.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/autoplay";
import useWindowDimensions from "../../useWindowDimensions";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useEffect } from "react";
const AboutMe = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <HeroAbout title="About Me" page="About" />
            <div className="about-me-section">
            <AboutMeComponent />
            <HappyClients />
            <MySkills /></div>
        </div>
    )
}
const AboutMeComponent = () => {
    return (
        <div className="about-me">
            <img src="https://saja-react.vercel.app/assets/img/about/about-img-3.jpg" />
            <div className="about-me-text">
                <span>About Me</span>
                <h1>Well experienced Web Developer</h1>
                <p>As a web developer you probably immediately thought that the way to optimize for this is to include as many keywords as possible on your resume. Unfortunately for that solution.</p>
                <div className="about-me-info">
                    <ul>
                        <li>Name : <span>Daniyel Joseph</span></li>
                        <li>Phone : <span>(+88) 252 - 365 - 210</span></li>
                        <li>Email : <span>Daniyel@example.com</span></li>
                        <li>Skype : <span>Daniyel29</span></li>
                    </ul>
                    <ul>
                        <li>Adress : <span>Stree Road, NY, USA</span></li>
                        <li>Experience : <span>5+ years</span></li>
                        <li>Freelance : <span>Available</span></li>
                        <li>Language : <span>English, Chinese</span></li>
                    </ul>
                </div>
                <button>Download CV</button>
            </div>
        </div>
    )
}
const HappyClients = () => {
    const { height, width } = useWindowDimensions();
    return (
        <div className="happy-clients">
            <div className="happy-clients-text">
                <span>Happy Clients</span>
                <h1>I worked with brands</h1>
            </div>
            <Swiper
    modules={[Autoplay]}
    autoplay={true}
    loop={true}
      spaceBetween={0}
      slidesPerView={width > 800 ? 3 : 2}
      className="happy-clients-swiper"
    >
        <SwiperSlide className="brands-swiper">
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-1.png" />
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-2.png" />
        </SwiperSlide>
        <SwiperSlide className="brands-swiper">
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-3.png" />
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-4.png" />
        </SwiperSlide>
        <SwiperSlide className="brands-swiper">
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-5.png" />
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-6.png" />
        </SwiperSlide>
        <SwiperSlide className="brands-swiper">
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-1.png" />
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-2.png" />
        </SwiperSlide>
        <SwiperSlide className="brands-swiper">
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-3.png" />
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-4.png" />
        </SwiperSlide>
        <SwiperSlide className="brands-swiper">
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-5.png" />
            <img src="https://saja-react.vercel.app/assets/img/brand/brand-6.png" />
        </SwiperSlide>
        </Swiper>
        </div>
    )
}

const MySkills = () => {
    return (
        <div className="my-skills">
            <div className="years-number">
                <img src="https://saja-react.vercel.app/assets/img/shape/skill-shape.png"/>
                <h1>05 <br /><span>years <br />experience</span></h1>
            </div>
            <div className="progress-bars">
            <div className="my-skills-text">
                <span>My Skills</span>
                <h1>My experience and skills</h1>
            </div>
            <ProgressBar bgcolor="#ef0454" label="Front-end" completed="85" className="progress-bar"/>
            <ProgressBar bgcolor="#ef0454" label="WordPress" completed="60" className="progress-bar"/>
            <ProgressBar bgcolor="#ef0454" label="Lavarel" completed="70" className="progress-bar"/>
            <ProgressBar bgcolor="#ef0454" label="Graphic Design" completed="50" className="progress-bar"/>
            <ProgressBar bgcolor="#ef0454" label="Javascript" completed="80" className="progress-bar"/>
            </div>
        </div>
    )
}
export default AboutMe;