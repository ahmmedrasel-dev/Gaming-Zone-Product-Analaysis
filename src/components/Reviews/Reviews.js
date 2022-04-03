import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews, setReviews] = useReview();

  return (
    <section className='mb-5'>
      <Container>
        <Row>
          <Col>
            <Row> {
              reviews.map(review => <Review
                key={review.id}
                review={review}
              ></Review>)
            }
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;