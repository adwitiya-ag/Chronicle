import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <div className="card">
      <h3>{blog.title}</h3>
      {/* Show only the first 120 characters */}
      <p>{blog.content.slice(0, 120)}...</p>
      <small>By {blog.author?.fullName}</small>
      <br />
      <Link to={`/blogs/${blog._id}`}>Read more</Link>
    </div>
  );
}

export default BlogCard;
