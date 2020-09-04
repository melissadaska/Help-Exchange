import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const RequestList = ({ requests, title }) => {
  if (!requests.length) {
    return <h3>No Requests Yet</h3>;
  }

  return (
      <div>
      <Card.Title border="light">{title}</Card.Title>
      {requests &&
        requests.map(request => (
          <Card key={request._id} className="mb-3">
                <Card.Header>
                    <Link
                        to={`/profile/${request.username}`}
                        style={{ fontWeight: 700 }}
                        className="text-decoration-none"
                    >
                    </Link>{''}
                    <span style={{ fontWeight: 700 }} className="text-light">
                      {request.username}
                    </span>{' '}
                     request on {request.createdAt}
                </Card.Header>
            <Card.Body>
                <Card.Title>{request.title}</Card.Title>
                    <Link to={`/request/${request._id}`}>
                        
                        <Card.Text className="mb-0">
                        Volunteers: {request.volunteerCount} | Click to{' '}
                        {request.volunteerCount ? 'see' : 'start'} the discussion!
                        </Card.Text>
                    </Link>
            </Card.Body>
          </Card>
        ))}
        </div>
  );
};

export default RequestList;
