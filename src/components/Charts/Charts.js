import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartdata from '../../hooks/useChartdata';

const ChartsOne = () => {
  const [data] = useChartdata();
  return (
    <Container>
      <Row>
        <Col>
          <h3 className='text-center'> Sales</h3>
          <LineChart className='m-auto' width={600} height={400} data={data}>
            <Line dataKey={'sell'} fill='#19315d'></Line>
            <XAxis dataKey={'month'}></XAxis>
            <CartesianGrid stroke="#ccc" />
            <Tooltip></Tooltip>
            <Legend></Legend>
            <YAxis></YAxis>
          </LineChart>
        </Col>
      </Row>
    </Container>
  );
};




export default ChartsOne;