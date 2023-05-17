import "./CreativePortfolioStyles.css"
import { Link } from "react-router-dom";
const CreativePortfolio = () => {
    return (
        <div className="creative-portfolio">
            <div className="creative-portfolio-text">
            <p><span>Creative Portfolio</span></p>
            <h1>Solution we offer you</h1>
            <p>Experiences that keep your customers coming back for more information about
            services Makes best effort</p>
            </div>
            <div className="portfolios">
                <Portfolio img="https://saja-react.vercel.app/assets/img/portfolio/portfolio-img-1.jpg" p="Development"
                h="Web Business Plan"/>
                <Portfolio img="https://saja-react.vercel.app/assets/img/portfolio/portfolio-img-2.jpg" p="Web Consultancy"
                h="Web Consultancy Plan"/>
                <Portfolio img="https://saja-react.vercel.app/assets/img/portfolio/portfolio-img-3.jpg" p="Content Writing"
                h="Content Writing Plan"/>
            </div>
            <Link className="view-btn" to="/pages">VIEW ALL WORKS</Link>
        </div>
    )
}
const Portfolio = (props) => {
    return (
        <div className="portfolio">
            <img src={props.img} />
            <div>
                <p>{props.p}</p>
                <h3>{props.h}</h3>
            </div>
        </div>
    )
}
export default CreativePortfolio;