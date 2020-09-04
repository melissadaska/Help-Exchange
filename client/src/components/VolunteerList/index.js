import React from 'react';
import { Link } from 'react-router-dom';

const VolunteerList = ({ volunteers }) => {
  return (
<div className="card mb-3">
    <div className="card-header">
      <span className="text-light">Volunteers</span>
    </div>
    <div className="card-body">
      {volunteers &&
        volunteers.map(volunteer => (
          <p className="mb-3" key={volunteer._id}>
            {volunteer.volunteerBody} {''}
            <Link to={`/profile/${volunteer.username}`} style={{ fontWeight: 700 }}>
              {volunteer.username} on {volunteer.createdAt}
            </Link>
          </p>
        ))}
    </div>
</div>
  );
};

export default VolunteerList;
