// src/components/Table/Table.jsx

import React from 'react';
import './Table.css';

// Import the image
import manImage from '../man.png';

const orders = [
  {
    id: 1,
    name: 'Wade Warren',
    orderNo: '15478256',
    amount: '$124.00',
    status: 'Delivered',
    profileImage: manImage,
  },
  {
    id: 2,
    name: 'Jane Copper',
    orderNo: '48965786',
    amount: '$65.00',
    status: 'Delivered',
    profileImage: manImage,
  },
  {
    id: 3,
    name: 'Guy Hawkins',
    orderNo: '78958215',
    amount: '$365.02',
    status: 'Cancelled',
    profileImage: manImage,
  },
  {
    id: 4,
    name: 'Kristin Watson',
    orderNo: '20965732',
    amount: '$128.20',
    status: 'Delivered',
    profileImage: manImage,
  },
  {
    id: 5,
    name: 'Cody Fisher',
    orderNo: '78514568',
    amount: '$545.00',
    status: 'Delivered',
    profileImage: manImage,
  },
  {
    id: 6,
    name: 'Savannah Nguyen',
    orderNo: '95715620',
    amount: '$165.00',
    status: 'Delivered',
    profileImage: manImage,
  },
];

const Table = () => {
  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>
      <div className="orders-header">
        <span>Customer</span>
        <span>Order No.</span>
        <span>Amount</span>
        <span>Status</span>
      </div>
      <div className="orders-body">
        {orders.map((order) => (
          <div key={order.id} className={`order-item ${order.status.toLowerCase()}`}>
            <div className="profile-container">
              <img src={order.profileImage} alt={`${order.name}'s profile`} className="profile-pic" />
              <span>{order.name}</span>
            </div>
            <span className='forSmallScreen'>{order.orderNo}</span>
            <span className='forSmallScreen'>{order.amount}</span>
            <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
