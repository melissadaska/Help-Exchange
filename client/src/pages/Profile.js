import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import RequestList from '../components/RequestList';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';

function Profile() {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery( QUERY_ME, {
    variables: { username: userParam }
  });

  const user = data?.me || data?.user || {};

  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data.username.toLowerCase() === userParam.toLowerCase()) {
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
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <RequestList requests={user.requests} title={`${user.username}'s requests...`} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
