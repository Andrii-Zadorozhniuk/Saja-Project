import CreativeService from "../../components/CreativeService/CreativeService";
import HeroAbout from "../../components/Hero/Hero"
import PriceTable from "../../components/PriceTable/PriceTable";
import Quotes from "../../components/Quotes/Quotes";
import { useEffect } from "react";
const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <HeroAbout title="Services" page="Services"/>
            <CreativeService />
            <PriceTable />
            <Quotes />
        </div>
    )
}
export default Services;