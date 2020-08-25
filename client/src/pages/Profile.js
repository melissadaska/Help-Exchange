import React from 'react';
import { useParams } from 'react-router-dom'; //Redirect,
import Volunteer from '../components/Volunteer';
import { useQuery, useMutation} from '@apollo/react-hooks';
import { QUERY_USER,QUERY_ME} from '../utils/queries';
import { ADD_REQUEST} from '../utils/mutations';
// import FriendList from '../components/FriendList';
import VolunteerForm from '../components/VolunteerForm';
// import Auth from '../utils/auth';

const Profile = () => {
  
  const [addRequest] = useMutation(ADD_REQUEST);
  const {username: userParam} = useParams();
  const { loading, data} = useQuery( userParam ? QUERY_USER : QUERY_ME, {
    variables: {username: userParam}
  });

  const user = data?.me||data?.user || {};
  
//   // redirect to personal profile page if username is the logged-in user's
//   if (Auth.loggedIn() && Auth.getProfile().data.username.toLowerCase() === userParam.toLowerCase()) {
//   return <Redirect to="/profile" />;
// }

  if(loading) {
    return <div>Loading...</div>
  }
  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links above to sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try{
      await addRequest({
        variables: {id:user._id}
      });
    } catch (e) {
      console.error(e)
    }
  };

  return (
    <div>
      <div className="flex-row mb-3">
         <h2 className="bg-dark text-secondary p-3 display-inline-block">
         Viewing {userParam ? `${user.username}'s`: 'your'}'s profile.
        </h2>
        {userParam && (
        <button className="btn ml-auto" onClick={handleClick}>
          Add Request
       </button>
       )}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <Volunteer requests={user.requests} title={`${user.username}'s Request's`}/>
        </div>

        <div className="col-12 col-lg-3 mb-3">
          {/* <FriendList
            username={user.username}
            // friendCount={user.friendCount}
            // friends={user.friends}
          /> */}
          
          </div>
      </div>
      <div className="mb-3"> {!userParam && <VolunteerForm/>}</div>
    </div>
  );
};

export default Profile;