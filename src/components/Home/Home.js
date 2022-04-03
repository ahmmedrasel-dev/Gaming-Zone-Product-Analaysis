import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useReview from '../../hooks/useReview';
import Review from '../Review/Review';

const Home = () => {
  const [reviews, setReviews] = useReview();



  return (
    <>
      <section>
        <Container>
          <Row>
            <Col className='d-flex align-items-center'>
              <div>
                <h1>Microsoft Xbox </h1>
                <h2>Series XWireless Controller Shock Blue</h2>
                <p>Experience the modernized design of the Xbox Wireless Controller in Shock Blue, featuring sculpted surfaces and refined geometry for enhanced comfort during gameplay with battery usage up to 40 hours. Stay on target with a hybrid D-pad and textured grip on the triggers, bumpers, and back-case. </p>
              </div>
            </Col>
            <Col>
              <img className='img-fluid mt-3' src="https://media.gamestop.com/i/gamestop/11108955/Microsoft-Xbox-Series-X-Wireless-Controller-Shock-Blue?$pdp2x$" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <h1 className='text-center'>Customer Feedback & Reviews</h1>
            <Col>
              <Row> {
                reviews.map(review => <Review review={review}></Review>)
              }
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;