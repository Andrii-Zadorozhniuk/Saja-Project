import "./PriceTableStyles.css"
import { useState } from "react";
const PriceTable = () => {

    return (
        <div className="price-table">
            <span>Price Table</span>
            <h1>Pricing & Packaging</h1>
            <p>Experiences that keep your customers coming back for more information <br />
about services Makes best effort</p>
            <PricePlans />
        </div>
    )
}
const PricePlans = () => {
    const [plan, setPlan] = useState(false);
    return (
        <div>
            <div className="btns-radio">
                <button className={plan ? "btn-off" : "btn-on"} onClick={() => setPlan(false)}>Monthly</button>
                <button className={plan ? "btn-on" : "btn-off"} onClick={() => setPlan(true)}>Yearly</button>
            </div>
            <div className="price-plans">
                <PricePlan plan="Startup Plan" price={plan ? "29" : "19"} time={plan ? "Year" : "Month"} />
                <PricePlan prem="premium" plan="Premium Plan" price={plan ? "79" : "59"} time={plan ? "Year" : "Month"} />
                <PricePlan plan="Enterprice" price={plan ? "89" : "79"} time={plan ? "Year" : "Month"} />
            </div>
        </div>
    )
}
const PricePlan = (props) => {
    return (
        <div className={`price-plan ${props.prem}`}>
            <h4>{props.plan}</h4>
            <h2>${props.price}<span>.00/{props.time}</span></h2>
            <ul>
                <li><i className="fa fa-check"></i> 10 GB Data</li>
                <li><i className="fa fa-check"></i>Marketing Calendar</li>
                <li><i className="fa fa-check"></i>Personalization</li>
                <li><i className="fa fa-check"></i>3 Sandboxs</li>
                <li><i className="fa fa-check"></i>Secure Domains</li>
                <li><i className="fa fa-check"></i>Dynamic Content</li>
            </ul>
            <button>SELECT PLAN</button>
        </div>
    )
}
export default PriceTable;