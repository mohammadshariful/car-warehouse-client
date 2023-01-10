import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./CustomLink.css";
const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className="custom-link"
      style={{ color: match ? "#ff2f9b" : "#f0f8ff" }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
