import {Link} from 'react-router-dom'
import "./HeroStyles.css"
const HeroAbout = (props) => {
    return (
        <div className="hero-about-section">
            <h1>{props.title}</h1>
            <p><Link className="home-link" to="/">Home</Link>  &#62; {props.page}</p>
        </div>
    )
}
export default HeroAbout;