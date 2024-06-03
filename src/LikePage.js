// src/LikePage.js

import React, { useState } from 'react';
import './LikePage.css';

const LikePage = () => {
  const initialPosts = [
    { id: 1, content: 'Post 1', likes: 0 },
    { id: 2, content: 'Post 2', likes: 0 },
    { id: 3, content: 'Post 3', likes: 0 },
  ];

  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="like-page">
      <h1>Instagram Like Page</h1>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <button onClick={() => handleLike(post.id)}>Like</button>
            <p>Likes: {post.likes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikePage;
