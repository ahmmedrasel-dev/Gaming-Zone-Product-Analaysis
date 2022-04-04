
import React from 'react';
import ChartsOne from '../Charts/Charts';
import ChartTwo from '../Charts/ChartTwo';


const Dashboard = () => {

  return (
    <div className='d-flex mt-5 jus'>
      <ChartsOne></ChartsOne>
      <ChartTwo></ChartTwo>
    </div>
  );
};

export default Dashboard;