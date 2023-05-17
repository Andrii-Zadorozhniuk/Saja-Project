import BlogPosts from "../../components/BlogPosts/BlogPosts";
import HeroAbout from "../../components/Hero/Hero";
import { useEffect } from "react";
const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div>
            <HeroAbout title="Blog" page="Blog"/>
            <BlogPosts />
        </div>
    )
}
export default Blog;