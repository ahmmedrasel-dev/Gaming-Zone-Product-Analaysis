
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ChartsOne from '../Charts/Charts';
import ChartThree from '../Charts/ChartThree';
import ChartTwo from '../Charts/ChartTwo';


const Dashboard = () => {

  return (
    <div className='d-flex mt-5 justify-content-center'>
      <Container>
        <Row>
          <ChartsOne></ChartsOne>
          <ChartTwo></ChartTwo>
          <ChartThree></ChartThree>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;