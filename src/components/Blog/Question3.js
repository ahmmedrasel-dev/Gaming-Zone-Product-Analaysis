import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from './Blog';

const Question3 = () => {
  return (
    <Container>
      <Row>
        <Col md='12'>
          <Blog
            question={'What is inline and block element and the difference of them.?'}
            answer={'In HTML there are three types of element. Inline, Inline block and Block Element. The inline element are those element which has no padding and margin as well as the width of this element equal to text width. Some examples of inline elements are <span> , <strong>, and <img> tags. In inline element set padding and margin in left and right site only. top and bottom does not work. on the other hand, Inline Block is the value of display property of css. We can change the inline element to inline block via display property using the value of inline-block. The behavior of inline block element mostly similar with inline element the only different is padding and margin works all sides and displays an element as an inline-level block container. You cna set height and width values.'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Question3;