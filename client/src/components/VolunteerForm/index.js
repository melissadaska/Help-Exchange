import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_VOLUNTEER } from '../../utils/mutations';

const VolunteerForm = ({ requestId }) => {
    const [volunteerBody, setBody] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const [addVolunteer, { error }] = useMutation(ADD_VOLUNTEER);

    const handleChange = event => {
    if (event.target.value.length <= 280) {
        setBody(event.target.value);
        setCharacterCount(event.target.value.length);
    }
    };

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
        // add thought to database
        await addVolunteer({
            variables: { volunteerBody, requestId }
        });
    
        // clear from value
        setBody('');
        setCharacterCount(0);
        } catch (e) {
        console.error(e);
        }
    };
  return (
    <div>
      <p className={`m-0 ${characterCount === 280 || error ? 'text-error' : ''}`}>
        Character Count: {characterCount}/280
        {error && <span className="ml-2">Something went wrong...</span>}
      </p>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
         <textarea
            placeholder="Here's a new volunteer request..."
            value={volunteerBody}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
        ></textarea>

        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default VolunteerForm;
