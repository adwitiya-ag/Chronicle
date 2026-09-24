import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getBlogById, deleteBlog } from "../api/blogApi";
import { useAuth } from "../context/AuthContext";

function BlogDetail() {
  const { id } = useParams(); // blog id from the URL
  const navigate = useNavigate();
  const { user } = useAuth();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(id);
        setBlog(res.data.data);
      } catch (err) {
        setError("Blog not found");
      }
    };
    fetchBlog();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this blog?")) return;
    try {
      await deleteBlog(id);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Could not delete");
    }
  };

  if (error) return <p className="error">{error}</p>;
  if (!blog) return <p className="center">Loading...</p>;

  // Only the author sees Edit / Delete buttons
  const isAuthor = user && user._id === blog.author._id;

  return (
    <div className="container">
      <h2>{blog.title}</h2>
      <small>By {blog.author.fullName} (@{blog.author.username})</small>
      <p className="content">{blog.content}</p>

      {isAuthor && (
        <div>
          <Link to={`/edit/${blog._id}`}><button>Edit</button></Link>
          <button className="danger" onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default BlogDetail;
