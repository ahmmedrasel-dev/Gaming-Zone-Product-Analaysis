import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartdata from '../../hooks/useChartdata';

const ChartTwo = () => {
  const [data] = useChartdata();
  return (
    <Container>
      <Row>
        <Col>
          <h3 className='text-center'>Investment Vs Revenue</h3>
          <BarChart className='m-auto' width={600} height={400} data={data}>
            <Bar dataKey="revenue" fill="#8884d8" />
            <Bar dataKey="investment" fill="##a91d1d" />
            <CartesianGrid stroke="#ccc" />
            <Tooltip></Tooltip>
            <Legend></Legend>
            <YAxis></YAxis>
            <XAxis dataKey={'month'}></XAxis>
          </BarChart>
        </Col>
      </Row>
    </Container>
  );
};

export default ChartTwo;