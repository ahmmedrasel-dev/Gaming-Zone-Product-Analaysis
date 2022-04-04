import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ to, children, ...props }) => {
  let resolve = useResolvedPath(to)
  let match = useMatch({ path: resolve.pathname, end: true })
  return (
    <div>
      <Link
        style={{ color: match ? '#0991B1' : 'BLACK', borderBottom: match ? '2px solid #0991B1' : '' }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;