import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  let resolve = useResolvedPath(to)
  let match = useMatch({ path: resolve.pathname, end: true })
  return (
    <div>
      <Link
        style={{ color: match ? '#a6c5ff' : '#ffffff', borderBottom: match ? '2px solid #a6c5ff' : '' }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;