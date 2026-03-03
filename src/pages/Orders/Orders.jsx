import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { assets } from '../../assets/assets';
import "./Orders.css";
import OrdersSkeleton from '../../OrdersSkeleton/OrdersSkeleton';

const Orders = () => {
    const [data,setData] = useState([]);
    const fetchOrders = async () => {
        const response = await axios.get("https://foodies-back-end-1.onrender.com/api/orders/all");
        setData(response.data);
    }
    const updateStatus = async(event,orderId) => {
        const response = await axios.patch(`https://foodies-back-end-1.onrender.com/api/orders/status/${orderId}?status=${event.target.value}`);
        if(response.status === 200){
            await fetchOrders();
        }
    }
    useEffect(()=>{
      fetchOrders();
    },[]);

return (
  {
    data.length === 0 ? (<OrdersSkeleton />) :
  (
  <div className="container py-5">

    {/* ================= MOBILE VIEW (Cards) ================= */}
    <div className="d-md-none">
      {data &&
        data.map((order, index) => (
          <div key={index} className="card mb-3 shadow-sm border-0">
            <div className="card-body">

              {/* Top Row */}
              <div className="d-flex align-items-center mb-2">
                <img src={assets.parcel} alt="" height={42} width={42} />
                <div className="ms-3 fw-bold">
                  ₹{order.amount.toFixed(2)}
                </div>
              </div>

              {/* Items */}
              <div className="mb-2 small">
                {order.orderedItems.map((item, i) =>
                  i === order.orderedItems.length - 1
                    ? `${item.name} x${item.quantity}`
                    : `${item.name} x${item.quantity}, `
                )}
              </div>

              {/* Address */}
              <div className="text-muted small mb-2">
                {order.userAddress}
              </div>

              {/* Count */}
              <div className="mb-2">
                Items: {order.orderedItems.length}
              </div>

              {/* Status */}
              <select
                className="form-select"
                onChange={(event) => updateStatus(event, order.id)}
                value={order.orderStatus}
              >
                <option value="Preparing">Preparing</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>

            </div>
          </div>
        ))}
    </div>

    {/* ================= TABLET / LAPTOP / DESKTOP ================= */}
    <div className="table-responsive d-none d-md-block">
      <table className="table align-middle table-hover">
        <thead className="table-light">
          <tr>
            <th></th>
            <th>Order Details</th>
            <th>Amount</th>
            <th>Items</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((order, index) => (
              <tr key={index}>
                <td>
                  <img src={assets.parcel} alt="" height={42} width={42} />
                </td>

                <td>
                  <div>
                    {order.orderedItems.map((item, i) =>
                      i === order.orderedItems.length - 1
                        ? `${item.name} x${item.quantity}`
                        : `${item.name} x${item.quantity}, `
                    )}
                  </div>
                  <div className="text-muted small">
                    {order.userAddress}
                  </div>
                </td>

                <td>₹{order.amount.toFixed(2)}</td>

                <td>Items: {order.orderedItems.length}</td>

                <td style={{ minWidth: "180px" }}>
                  <select
                    className="form-select"
                    onChange={(event) => updateStatus(event, order.id)}
                    value={order.orderStatus}
                  >
                    <option value="Preparing">Preparing</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>

  </div>
  )
  }
);

}

export default Orders
;