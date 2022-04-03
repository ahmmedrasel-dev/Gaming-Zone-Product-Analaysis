import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
  const [reviews, setReviews] = useReview();

  const total = reviews.slice(0, 3);
  const navigate = useNavigate()
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className='d-flex align-items-center'>
              <div>
                <h1>Microsoft Xbox </h1>
                <h2>Series XWireless Controller Shock Blue</h2>
                <p>Experience the modernized design of the Xbox Wireless Controller in Shock Blue, featuring sculpted surfaces and refined geometry for enhanced comfort during Gameplay with battery usage up to 40 hours. Stay on target with a hybrid D-pad and textured grip on the triggers, bumpers, and back-case. </p>
              </div>
            </Col>
            <Col>
              <img className='img-fluid mt-3' src="https://media.gamestop.com/i/gamestop/11108955/Microsoft-Xbox-Series-X-Wireless-Controller-Shock-Blue?$pdp2x$" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='mb-5'>
        <Container>
          <h1 className='text-center'>Customer Feedback & Reviews({total.length})</h1>
          <Row>
            <Col>
              <Row> {
                total.map(review => <Review
                  key={review.id}
                  review={review}
                ></Review>)
              }
              </Row>
            </Col>
            <div className='text-center'>
              <button onClick={() => navigate('/reviews')} className='see-all-btn'>See All Reviews</button>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;