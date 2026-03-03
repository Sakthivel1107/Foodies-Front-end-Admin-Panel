import React from "react";
import "./OrdersSkeleton.css";

const OrdersSkeleton = ({ rows }) => {
  return (
    <>
      {/* ================= MOBILE SKELETON ================= */}
      <div className="d-md-none">
        {Array.from({ length: rows }).map((_, index) => (
          <div key={index} className="card mb-3 shadow-sm border-0">
            <div className="card-body">

              <div className="d-flex align-items-center mb-3">
                <div className="skeleton skeleton-img"></div>
                <div className="skeleton skeleton-price ms-3"></div>
              </div>

              <div className="skeleton skeleton-text mb-2"></div>
              <div className="skeleton skeleton-text small mb-2"></div>
              <div className="skeleton skeleton-count mb-3"></div>

              <div className="skeleton skeleton-select"></div>

            </div>
          </div>
        ))}
      </div>

      {/* ================= DESKTOP SKELETON ================= */}
      <div className="table-responsive d-none d-md-block">
        <table className="table align-middle">
          <thead>
            <tr>
              <th></th>
              <th>Order Details</th>
              <th>Amount</th>
              <th>Items</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: rows }).map((_, index) => (
              <tr key={index}>
                <td>
                  <div className="skeleton skeleton-img"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-text mb-2"></div>
                  <div className="skeleton skeleton-text small"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-price"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-count"></div>
                </td>
                <td>
                  <div className="skeleton skeleton-select"></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersSkeleton;
