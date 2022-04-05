import React from 'react';
import { Col } from 'react-bootstrap';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChartdata from '../../hooks/useChartdata';

const ChartsOne = () => {
  const [data] = useChartdata();
  return (
    <Col md={6}>
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
  );
};




export default ChartsOne;