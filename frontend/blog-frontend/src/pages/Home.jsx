import { useEffect, useState } from "react";
import { getAllBlogs } from "../api/blogApi";
import BlogCard from "../components/BlogCard";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Runs once when the page opens
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await getAllBlogs();
        setBlogs(res.data.data);
      } catch (err) {
        setError("Could not load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <p className="center">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <h2>All Blogs</h2>
      {blogs.length === 0 && <p>No blogs yet. Be the first to write one!</p>}
      {blogs.map((blog) => (
        <BlogCard key={blog._id} blog={blog} />
      ))}
    </div>
  );
}

export default Home;
