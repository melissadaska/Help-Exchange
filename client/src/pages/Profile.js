import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Card, ListGroup, Form } from 'react-bootstrap';
import RequestList from '../components/RequestList';
import RequestForm from '../components/RequestForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER, QUERY_ME } from '../utils/queries';

function Profile() {
  const { username: userParam } = useParams();

  const { loading, data} = useQuery( userParam ? QUERY_USER : QUERY_ME, {
    variables: {username: userParam}
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  return (
    <Card className="w-50 mx-auto bg-secondary">
      <Card.Header className="bg-dark text-secondary p-3 display-inline-block">
        Viewing {`${user.username}'s`} Profile
      </Card.Header>
          <Card.Body className="justify-content-center w-50">
          <ListGroup className="list-group">
            <Form.Text className="">Name</Form.Text>
              <ListGroup.Item>{user.name}</ListGroup.Item>
            <Form.Text className="">Location</Form.Text>
              <ListGroup.Item>{user.location}</ListGroup.Item>
            <Form.Text className="">Phone Number</Form.Text>
              <ListGroup.Item>{user.number}</ListGroup.Item>
          </ListGroup>
          </Card.Body>
        
        <Card.Body className="col-12 mb-3 col-lg-12">
          <RequestList requests={user.requests} title={`${user.username}'s requests...`} />
        </Card.Body>
      <Card.Body className="col-12 mb-3 col-lg-12"> {!userParam && <RequestForm/>}</Card.Body>
    </Card>
  );
};

export default Profile;
