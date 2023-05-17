import { Offer } from "../../components/CreativeService/CreativeService"
import HeroAbout from "../../components/Hero/Hero"
import "./PagesStyles.css"
import { useEffect } from "react"
const Pages = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <HeroAbout title="Our Work" page="Pages"/>
            <div className="web-business">
                <Main />
                <Side />
            </div>
        </div>
    )
}
const Main = () => {
    return (
        <div className="our-work">
            <img src="https://saja-react.vercel.app/assets/img/portfolio/portfolio-details-1.jpg" />
            <p>When I skim through the documentation of popular frameworks, I find the features described in Part 1 straight away. When I read the web platform documentation (for example, on MDN), I find many confusing patterns of how to do things, without a conclusive representation of data-binding, list synchronization, or reactivity. I will try to draw some guidelines of how to approach these problems on the web platform, without requiring a framework (in other words, by going vanilla).</p>
            <h2>Special Features</h2>
            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book has been survived not only five centuries, but also the leap into electronic typesetting.</p>
            <h3>Finished Check Steps</h3>
            <ul>
                <li><i className="fa fa-check"></i> Assets Optimizations</li>
                <li><i className="fa fa-check"></i>Setting Realistic Goals Set</li>
                <li><i className="fa fa-check"></i>Delivery Optimizations</li>
                <li><i className="fa fa-check"></i>Laravel Structure</li>
            </ul>
            <h2>Sketch & Planning</h2>
            <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book has been survived not only five centuries, but also the leap into electronic typesetting. Master the tools that front-end developers use every day.</p>
            <div className="offers">
            <Offer icon="fa-solid fa-code" title="Web Development" desc="Reach new audiences with omnichannel commerce anywhere in the world and surpass industry" />
            <Offer icon="fa-regular fa-pen-to-square" title="Content Writing" desc="Use drag-and-drop functionality, custom product recommendations and headless customize your website." /></div>
        </div>
    )
}
const Side = () => {
    return (
        <div className="side-info">
            <div className="side-info-container">
                <h2>Information</h2>
                <span>Date</span>
                <p>25 Nov 2021 - 13 Feb 2022</p>
                <span>Client</span>
                <p>Syalam Aderson</p>
                <span>Category</span>
                <p>Consultancy</p>
            </div>
            <button>Watch Live</button>
            <button>Download Brouchure <i className="fa fa-download"></i> </button>
        </div>
    )
}
export default Pages;