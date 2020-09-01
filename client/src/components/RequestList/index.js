import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { DELETE_REQUEST } from '../../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { removeRequestId } from '../../utils/localStorage';


const RequestList = ({ requests, title }) => {
  if (!requests.length) {
    return <h3>No Requests Yet</h3>;
  }
  const [userData, setUserData] = useState({});

  const { deleteRequest } = useMutation(DELETE_REQUEST);

  const handleDeleteRequest = async (requestId) => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteRequest(requestId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove book's id from localStorage
      removeRequestId(requestId);
    } catch (err) {
      console.error(err);
    }
  };

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
                        {request.username}
                    </Link>{' '}
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
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteRequest(request.requestId)}>
                    Delete Request
                  </Button>
            </Card.Body>
          </Card>
        ))}
        </div>
  );
};

export default RequestList;
