import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import RequestList from '../components/RequestList';
import { QUERY_REQUESTS } from '../utils/queries';
import Auth from '../utils/auth';


function Home() {
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_REQUESTS);
    const requests = data?.requests || [];
    console.log(requests);

    // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
    // const { data } = useQuery(QUERY_ME_BASIC);  

    const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <RequestList requests={requests} title="Here are the requests" />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;