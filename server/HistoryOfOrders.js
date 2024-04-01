import React, { useState, useEffect } from 'react';
import Order from './Order';
import ErrorMessage from './ErrorMessage';

function HistoryOfOrders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('/api/orders');
        const data = await response.json();
        setOrders(data.orders);
        setIsLoading(false);
      } catch (error) {
        setErrorMessage('Error fetching orders.');
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div>
      <h2>Order History</h2>
      {orders.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
}

export default HistoryOfOrders;