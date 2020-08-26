import React from 'react';
import { Link } from 'react-router-dom';

const RequestList = ({ requests, title }) => {
  if (!requests.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {requests &&
        requests.map(request => (
          <div key={request._id} className="card mb-3">
            <p className="card-header">
            <Link
                to={`/profile/${request.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
            >
                {request.username}
            </Link>{' '}
            thought on {request.createdAt}
            </p>
            <div className="card-body">
            <Link to={`/request/${request._id}`}>
                <p>{request.thoughtText}</p>
                <p className="mb-0">
                Reactions: {request.reactionCount} || Click to{' '}
                {request.reactionCount ? 'see' : 'start'} the discussion!
                </p>
            </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RequestList;