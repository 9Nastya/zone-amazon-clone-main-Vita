import React from 'react';

function Order({ order, onCancel }) {
  const { id, date, items, totalCost } = order;

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel this order?')) {
      onCancel(id);
    }
  };

  return (
    <li>
      <h3>Order ID: {id}</h3>
      <p>Order Date: {date}</p>
      <h4>Items:</h4>
      <ul>
        {items.map((item) => (
          <li key={item.product.id}>
            {item.product.name} x {item.quantity} - ${item.product.price}
          </li>
        ))}
      </ul>
      <p>Total Cost: {totalCost}</p>
      <button onClick={handleCancel}>Cancel</button>
    </li>
  );
}

export default Order;