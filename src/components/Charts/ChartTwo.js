import React from 'react';
import { Col } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChartdata from '../../hooks/useChartdata';

const ChartTwo = () => {
  const [data] = useChartdata();
  return (
    <Col md={6}>
      <h3 className='text-center'>Investment Vs Revenue</h3>
      <BarChart className='m-auto' width={600} height={400} data={data}>
        <Bar dataKey="revenue" fill="#19315d" />
        <Bar dataKey="investment" fill="#057ad4" />
        <CartesianGrid stroke="#ccc" />
        <Tooltip></Tooltip>
        <Legend></Legend>
        <YAxis></YAxis>
        <XAxis dataKey={'month'}></XAxis>
      </BarChart>
    </Col>
  );
};

export default ChartTwo;