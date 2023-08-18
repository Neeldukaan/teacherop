import React from 'react';

const Notifications = ({ messages }) => {
  return (
    <div className="my-4">
      <h4>Notifications</h4>
      <ul className="list-group">
        {messages.map((msg, index) => (
          <li key={index} className="list-group-item">{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
