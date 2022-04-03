import React from 'react';
import { Col } from 'react-bootstrap';
import './Review.css';

const Review = ({ review }) => {
  const { name, comments, photo, ratting, country } = review;
  return (
    <Col md={4} className="mt-5">
      <div className='review-item'>
        <img src={photo} alt="" />
        <span>Ratting: {ratting}</span>
        <h3>{name}</h3>
        <h5><small>{country}</small></h5>
        <p title={comments}>{comments.slice(0, 90) + '...'}</p>
      </div>
    </Col>
  );
};

export default Review;