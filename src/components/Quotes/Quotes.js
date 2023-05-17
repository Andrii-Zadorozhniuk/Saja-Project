import "./QuotesStyles.css"
import { Swiper, SwiperSlide } from 'swiper/react'; //npm install swiper
import { Autoplay } from "swiper";
import { QuotesItems } from "./QuotesItems";
import 'swiper/css';
import "swiper/css/autoplay";
const Quotes = () => {
    return (
        <div className="quotes-section">
    <Swiper
    modules={[Autoplay]}
    autoplay={true}
    loop={true}
      spaceBetween={50}
      slidesPerView={1}
    >
      {QuotesItems.map((item) => {
        return (
            <SwiperSlide>
                <div className="swiper-item">
                <i class="fa fa-quote-left"></i>
                <h3>{item.desc}</h3>
                <h1>{item.name}</h1>
                <p>{item.job}</p>
                <img src={item.img} />
                </div>
            </SwiperSlide>
        )
      })}
    </Swiper>
        </div>
    )
}
export default Quotes;