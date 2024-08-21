import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles.css'; // styles.css를 import

function PostEdit() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the post data by ID and populate the form
    // setTitle(post.title);
    // setContent(post.content);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/posts');
  };

  return (
    <div className="container">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <button className="back-button" onClick={() => navigate('/posts')}>
        Back to List
      </button>
    </div>
  );
}

export default PostEdit;