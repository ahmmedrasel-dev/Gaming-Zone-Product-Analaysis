import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Nofound = () => {
  return (
    <Container>
      <Row className='align-items-center'>
        <Col>
          <div>
            <p>Error 404</p>
            <h1> Oops! The page you're looking for isn't here.</h1>
            <p> You might have the wrong address, or the page may have moved.</p>
            <button className='btn btn-info'>
              Back to homepage
            </button>
            <button className='btn btn-warning ms-2'>
              Contact us
            </button>
          </div>
        </Col>
        <Col>
          <img className='w-75 mt-3 ms-5' src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
            alt=''
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Nofound;