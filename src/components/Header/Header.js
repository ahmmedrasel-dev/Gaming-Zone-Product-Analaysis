import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
  return (
    <div className='nav-bar'>
      <CustomLink className='nav-item' to='/'>Home</CustomLink>
      <CustomLink className='nav-item' to='/dashboard'>Dashboard</CustomLink>
      <CustomLink className='nav-item' to='/reviews'>Reviews</CustomLink>
      <CustomLink className='nav-item' to='/blogs'>Blogs</CustomLink>
      <CustomLink className='nav-item' to='/about'>About</CustomLink>
    </div>
  );
};

export default Header;