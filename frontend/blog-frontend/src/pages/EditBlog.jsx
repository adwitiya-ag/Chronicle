import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogById, updateBlog } from "../api/blogApi";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  // Load the old blog and fill the form
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogById(id);
        setTitle(res.data.data.title);
        setContent(res.data.data.content);
      } catch (err) {
        setError("Could not load blog");
      }
    };
    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await updateBlog(id, { title, content });
      navigate(`/blogs/${id}`);
    } catch (err) {
      setError(err.response?.data?.message || "Could not update blog");
    }
  };

  return (
    <div className="container small">
      <h2>Edit blog</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea rows="10" value={content} onChange={(e) => setContent(e.target.value)} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Save changes</button>
      </form>
    </div>
  );
}

export default EditBlog;
