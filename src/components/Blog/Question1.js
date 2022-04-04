import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Blog from './Blog';

const Question1 = () => {
  return (
    <Container>
      <Row>
        <Col md='12'>
          <Blog
            question={'What is context Api and How It works?'}
            answer={'Context Api is the way of transfer data form one component to another component. It make global variable which is access form any other component. In generally React Application passing data one component to another component using props drillings it means form top to down. But this way the child components can not pass data to parent components. In this circumstance React add new Feature Context Api. For using Context Api First, we need to create the context, which we can later use to create providers and consumers. Once that’s done, we can import the context and use it to create our provider, which we’re calling MyProvider. In it, we initialize a state with some values, which you can share via value prop our provider component. To make the provider accessible to other components, we need to wrap our sharable component. From which component we want to use data their import useContext Hook From React. in useContext hook we import data which is export form Sharable components.'}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Question1;