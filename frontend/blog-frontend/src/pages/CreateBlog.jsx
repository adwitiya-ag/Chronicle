import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../api/blogApi";

function CreateBlog() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await createBlog({ title, content });
      navigate(`/blogs/${res.data.data._id}`); // open the new blog
    } catch (err) {
      setError(err.response?.data?.message || "Could not create blog");
    }
  };

  return (
    <div className="container small">
      <h2>Write a blog</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea rows="10" placeholder="Write here..." value={content} onChange={(e) => setContent(e.target.value)} required />
        {error && <p className="error">{error}</p>}
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default CreateBlog;
