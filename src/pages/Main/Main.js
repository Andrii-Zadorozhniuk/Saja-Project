import "./MainStyles.css"
import AboutCompany from "../../components/AboutCompany/AboutCompany"
import CreativeService from "../../components/CreativeService/CreativeService"
import WhyChoose from "../../components/WhyChoose/WhyChoose"
import CreativePortfolio from "../../components/CreativePortfolio/CreativePortfolio"
import Quotes from "../../components/Quotes/Quotes"
import { useEffect } from "react"
const Main = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <Hero />
            <AboutCompany />
            <CreativeService />
            <WhyChoose />
            <CreativePortfolio />
            <Quotes />
        </div>
    )
}
const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-text-container">
                <h1>Modern <span>Website</span> Building</h1>
                <p>Explore your digital business agency with Saja and Thanks for having a look latest update and new product</p>
                <button>Explore Us</button>
            </div>
        </div>
    )
}
export default Main;