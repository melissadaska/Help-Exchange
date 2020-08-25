import React from 'react';

import Auth from '../utils/auth';

import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';
import { QUERY_REQUEST } from '../utils/queries';

// import ReactionList from '../components/ReactionList';
// import ReactionForm from '../components/ReactionForm';

const SingleThought = props => {

  const { id: requestId } = useParams();

  const { loading, data } = useQuery(QUERY_REQUEST, {
    variables: { id: requestId }
  });

  const request = data?.request || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {request.username}
          </span>{' '}
          Request submitted on {request.createdAt}
        </p>
        <div className="card-body">
          <p>{request.requestText}</p>
        </div>
      </div>

      {/* {request.reactionCount > 0 && <ReactionList reactions={request.reactions} />}
      {Auth.loggedIn() && <ReactionForm requestId={request._id} />} */}
    </div>
  );
};

export default SingleThought;
