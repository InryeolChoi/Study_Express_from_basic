import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // styles.css를 import

function PostCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate('/posts');
  };

  return (
    <div className="container">
      <h2>Create Post</h2>
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
        <button type="submit">Create</button>
      </form>
      <button className="back-button" onClick={() => navigate('/posts')}>
        Back to List
      </button>
    </div>
  );
}

export default PostCreate;