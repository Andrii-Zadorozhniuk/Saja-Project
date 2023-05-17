import "./CreativeService.css"
const CreativeService = () => {
    return (
        <div className="creative-service">
            <div className="creative-service-text-container">
           <p> <span>Creative Service</span></p>
            <h1>Solution we offer you</h1>
            <p>Experiences that keep your customers coming back for more information about services Makes best effort</p>
        </div>
        <div className="offers-solution">
                <Offer icon="fa-regular fa-comments" title="Consultancy" desc="Experiences that keep your customers coming back for more information about services Makes best effort" />
                <Offer icon="fa-solid fa-code" title="Web Development" desc="Reach new audiences with omnichannel commerce anywhere in the world and surpass industry" />
                <Offer icon="fa-regular fa-pen-to-square" title="Content Writing" desc="Use drag-and-drop functionality, custom product recommendations and headless customize your website." />
                <Offer icon="fa-solid fa-pen-nib" title="Creative Design" desc="Faceted search built off of Elasticsearch, including custom field support for refined searchable partner." />
                <Offer icon="fa-solid fa-cloud-arrow-up" title="SEO" desc="SEO where your customers are shopping by integrating with top marketplaces such as business ranking." />
                <Offer icon="fa-solid fa-envelope-open-text" title="Digital Marketing" desc="Make it easier for your customers to pay with a broad spectrum of flexible payment methods and credit authorization." />
            </div>
        </div>
    )
}
export const Offer = (props) => {
    return (
        <div className="offer-solution">
            <i className={`${props.icon} icon-offer`}></i>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
}
export default CreativeService;