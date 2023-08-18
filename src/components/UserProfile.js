import React from 'react';

const UserProfile = ({ name, email, avatarUrl }) => {
  return (
    <div className="card mb-4">
      <img src={avatarUrl} alt="User Avatar" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
