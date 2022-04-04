import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from './Blog';

const Question2 = () => {
  return (
    <Container>
      <Row>
        <Col md='12'>
          <Blog
            question={'What is semantic Tag?'}
            answer={'Sematic Tag is the Clearly Meaning of Tags. In HTML 5 Introduce with sematic tag and element. For Example, In before html 5 when we write article we use the <p> Tag. we warp the full article with p tag. but In HTML 5 introduce with <article></article> Tag. It means we are writing blog article thats why we wrap the full article with article tag. We know that every website there are several Block like, Header, Footer, Main body, sidebar etc. The new HTML 5 for every separate block makes sematic tag so that we can recognized easily the separate block. Besides Its help to rank in Search Engine Optimization. Finding blocks of meaningful code is significantly easier. These are some of the semantic tags available: <article>, <aside>,<details>,<nav>, <header>, <footer> etc.'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Question2;