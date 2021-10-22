import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs, error, isPending} = useFetch('http://localhost:7999/blogs');

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs = { blogs } title = { "All Blogs!" } />}
            {/*<BlogList blogs={ blogs.filter( (blog) => blog.author === "mario" )} title={ "Mario's blogs" } handleDelete = { handleDelete }/>*/}
        </div>
    )
}

export default Home;