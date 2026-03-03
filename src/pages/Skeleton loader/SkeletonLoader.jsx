import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ rows }) => {
  return (
    <>
      {Array.from({ length: rows }).map((_, index) => (
        <tr key={index}>
          <td>
            <div className="skeleton skeleton-img"></div>
          </td>
          <td>
            <div className="skeleton skeleton-text"></div>
          </td>
          <td>
            <div className="skeleton skeleton-text"></div>
          </td>
          <td>
            <div className="skeleton skeleton-text small"></div>
          </td>
          <td>
            <div className="skeleton skeleton-icon"></div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default SkeletonLoader;
