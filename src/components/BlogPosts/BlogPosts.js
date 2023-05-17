import "./BlogPostsStyles.css"
import { PostItems } from "./BlogPostsItem"
import { useNavigate } from "react-router-dom"
const BlogPosts = () => {
    const navigate = useNavigate();
    return (
        <div className="blog-posts">
            {PostItems.map((item) => {
                const toBlogDetails = () => {
                                navigate("/blogdetails", {state:{img: item.img, title: item.title, author: item.author}})
                            }
             return (
                    <PostItem img={item.img} date="26 Feb 2022" comment="3"
                    title={item.title} author={item.author} func={toBlogDetails}/>
                )
            })}
            <div className="buttons-navigate">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>&rarr;</button>
            </div>
        </div>
    )
}
const PostItem = (props) => {


    return (
        <div className="blog-post">
            <div className="blog-post-img">
                <img src={props.img} />
            </div>
            <div className="blog-post-info">
            <div className="blog-post-data">
                <p><i className="fa fa-calendar"></i>{props.date}</p>
                <p><i className="fa fa-comment"></i>{props.comment} Comments</p>
            </div>
            <div className="blog-post-text">
                <h1>{props.title}</h1>
                <div className="author-btn">
                    <p>{props.author}</p>
                    <button onClick={props.func}>Read More &rarr;</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default BlogPosts;