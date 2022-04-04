import React from 'react';
import { BsStar } from 'react-icons/bs';
import { BsStarFill } from 'react-icons/bs';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';

const Review = ({ review }) => {
  const { name, comments, photo, ratting, country } = review;
  return (
    <Col md={4} className="mt-5">
      <div className='review-item'>

        <img src={photo} alt="" />
        <Rating
          initialRating={ratting}
          emptySymbol={<BsStar style={{ color: 'goldenrod' }} />}
          fullSymbol={<BsStarFill style={{ color: 'goldenrod' }} />}
          readonly

        ></Rating>
        <span>({ratting})</span>
        <h3>{name}</h3>
        <h5><small>{country}</small></h5>
        <p title={comments}>{comments}</p>
      </div>
    </Col>
  );
};

export default Review;