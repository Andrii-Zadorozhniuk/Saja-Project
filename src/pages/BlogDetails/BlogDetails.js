import HeroAbout from "../../components/Hero/Hero"
import {useLocation} from 'react-router-dom';
import "./BlogDetails.css";
import { useEffect } from "react";
const BlogDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <HeroAbout title="Blog Details" page="Blog Details" />
            <Article />
        </div>
    )
}
const Article = () => {
    const location = useLocation();
    return (
        <div className="blog-article">
            <div className="article">
            <article>
                <div className="img">
                    <img src={location.state.img} />
                </div>
                <div className="blog-article-info">
                <div className="blog-article-data">
                <p><i className="fa fa-calendar"></i>25 Feb 2022</p>
                <p><i className="fa fa-comment"></i>3 Comments</p>
                </div>
                <div className="blog-article-text">
                    <h1>{location.state.title}</h1>
                    <p>Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry give us a bell, don’t get shirty with me daft codswallop geeza up the duff zonked I tinkety tonk old fruit bog-standard spiffing good time Richard. Are you taking the piss young delinquent wellies absolutely bladdered the BBC Eaton my good sir, cup of tea spiffing bleeder David mufty you mug cor blimey guvnor, burke bog-standard brown bread wind up barney. Spend a penny a load of old tosh get stuffed mate I don’t want no agro the full monty grub Jeffrey faff about my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm I’m telling bugger plastered, jolly good say bits and bobs show off show off pick your nose and blow off cuppa blower my lady I lost the plot.
                    </p>
                <blockquote>
                    <div>
                    <i className="fa fa-quote-left"></i>
                    <p>Tosser argy-bargy mush loo at public school Elizabeth up the duff buggered chinwag on your bike mate don’t get shirty with me super, Jeffrey bobby Richard cheesed off spend a penny a load of old tosh blag horse.</p>
                    <p><span>Ryan E. Jones</span></p>
                    </div>
                </blockquote>
                <p>Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don’t get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
                <img src="https://saja-react.vercel.app/assets/img/blog/b7.jpg"/>
                <h2>Web Design Done Well Perfectly Pointless</h2>
                <p>Are you taking the piss young delinquent wellies absolutely bladdered the Eaton my good sir, cup of tea spiffing bleeder David mufty you mug cor blimey guvnor, burke bog-standard brown bread wind up barney. Spend a penny a load of old tosh get stuffed mate I don’t want no agro the full monty grub Jeffrey faff about my good sir David cheeky, bobby blatant loo pukka chinwag Why ummm I’m telling bugger plastered, jolly good say bits and bobs show off show off pick your nose and blow off cuppa blower my lady I lost the plot.</p>
                <p>Cheeky bugger cracking goal starkers lemon squeezy lost the plot pardon me no biggie the BBC burke gosh boot so I said wellies, zonked a load of old tosh bodge barmy skive off he legged it morish spend a penny my good sir wind up hunky-dory. Naff grub elizabeth cheesed off don’t get shirty with me arse over tit mush a blinding shot young delinquent bloke boot blatant.</p>
                <div className="post-tags">
                    <h3>Post tags: </h3>
                    <button>Landing</button>
                    <button>Pix Saas Blog</button>
                    <button>The Saas</button>
                </div>
                </div>
                </div>
            </article>
            <Author />
            <Comments />
            </div>
            <nav>
                <div className="search">
                <input type="search" placeholder="Search"/>
                <i className="fa fa-search"></i>
                </div>
                <h2>Recent news</h2>
                <div className="news">
                    <News img="https://saja-react.vercel.app/assets/img/blog/b1.jpg" title="Businesses Are Thriving. Societies Are Not."/>
                    <News img="https://saja-react.vercel.app/assets/img/blog/b2.jpg" title="The Importance of Instagram Metrics and"/>
                    <News img="https://saja-react.vercel.app/assets/img/blog/b7.jpg" title="Tiktok Influencer Marketing. How To Work."/>
                </div>
                <h2>Categories</h2>
                <p className="categories">App & Saas</p>
                <p className="categories">Fresh Products</p>
                <p className="categories">Graphics</p>
                <p className="categories">IOS/Android Design</p>
                <p className="categories">Saas Design</p>
                <p className="categories">Web Design</p>
                <p className="categories">Web Development</p>

                <h2>Tags</h2>
                <div className="post-tags-side">
                    <div>
                    <button>Animation</button>
                    <button>Branding</button>
                    <button>Design</button>
                    </div>
                    <div>
                    <button>Ideas</button>
                    <button>Landing</button>
                    <button>Pix Saas Blog</button>
                    </div>
                    <div>
                    <button>The Saas</button>
                    <button>UI/UX</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

const News = (props) => {
    return (
        <div className="news-item">
            <img src={props.img} />
            <div className="news-text">
                <h4>{props.title}</h4>
                <p>January 15, 2022</p>
            </div>
        </div>
    )
}

const Author = () => {
    return (
        <article className="article-author"> 
            <img src="https://saja-react.vercel.app/assets/img/blog/blog-page-3.jpg" />
            <div className="author-text">
                <h2>David Warner</h2>
                <span>Author</span>
                <p>I said cracking goal down the pub blag cheeky bugger at public school A bit of how's your father boot.!</p>
            </div>
        </article>
    )
}
const Comments = () => {
    return (
        <div className="comments-section">
            <h2>3 Comments</h2>
            <Comment img="https://saja-react.vercel.app/assets/img/blog/blog-sm-6.png"
            author="David Angel Makel" date="February 26, 2022" text="The bee's knees bite your arm off bits and bobs he nicked it gosh gutted mate blimey, old off his nut argy bargy vagabond buggered dropped." 
            />
            <Comment img="https://saja-react.vercel.app/assets/img/blog/blog-sm-7.png"
            author="Bailey Wonger" date="February 27, 2022" text="Do one say wind up buggered bobby bite your arm off gutted mate, David victoria sponge cup of char chap fanny around." 
            />
            <Comment img="https://saja-react.vercel.app/assets/img/blog/blog-sm-8.png"
            author="Hilary Ouse" date="February 27, 2022" text="Baking cakes is cobblers wellies William geeza bits and bobs what a plonker it's your round," 
            />
            <form>
            <h2>Leave a Reply</h2>
            <p>Your email address will not be published.</p>
            <div>
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
            </div>
            <input type="text" placeholder="Subject"/>
            <textarea type="text" placeholder="Message"/>
            <input type="submit" value="Submit" className="submit"/>
            </form>
        </div>
    )
}
const Comment = (props) => {
    return (
        <div className="comment">
            <img src={props.img} />
            <div className="comment-text">
                <h3>{props.author}</h3>
                <span>{props.date}</span>
                <p>{props.text}</p>
                <span><i class="fa fa-reply"></i>Reply</span>
            </div>
        </div>
    )
}
export default BlogDetails;