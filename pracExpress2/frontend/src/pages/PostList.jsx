import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // styles.css를 import

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch posts from the database
    // setPosts(response.data);
  }, []);

  const handleCreate = () => {
    navigate('/posts/create');
  };

  const handleEdit = (id) => {
    navigate(`/posts/edit/${id}`);
  };

  return (
    <div className="container">
      <h2>Post List</h2>
      <button onClick={handleCreate}>Create New Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <button onClick={() => handleEdit(post.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;