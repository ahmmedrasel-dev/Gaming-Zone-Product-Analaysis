import React from 'react';

const Blog = ({ question, answer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default Blog;