import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Blogs = () => {
  return (
    <>
      <div className='d-flex justify-content-center mt-5'>
        <Link to='question1' className='btn btn-success ms-2'>Question 1</Link>
        <Link to='question2' className='btn btn-info ms-2'>Question 2</Link>
        <Link to='question3' className='btn btn-warning ms-2'>Question 3</Link>
      </div>

      <div className='mt-5'>
        <Outlet></Outlet>
      </div>

    </>

  );
};

export default Blogs;