import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_REQUEST } from '../../utils/mutations';
import { QUERY_REQUESTS, QUERY_ME } from '../../utils/queries';

const RequestForm = () => {
  const [requestText, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [addRequest, { error }] = useMutation(ADD_REQUEST, {
    update(cache, { data: { addRequest } }) {
      try {
        // could potentially not exist yet, so wrap in a try...catch
        const { requests } = cache.readQuery({ query: QUERY_REQUESTS });
        cache.writeQuery({
          query: QUERY_REQUESTS,
          data: { requests: [addRequest, ...requests] }
        });
      } catch (e) {
        console.error(e);
      }
  
      // update me object's cache, appending new thought to the end of the array
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, requests: [...me.requests, addRequest] } }
      });
    }
  });

  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      // add thought to database
      await addRequest({
        variables: { requestText }
      });
  
      // clear form value
      setText('');
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
          placeholder="New Request"
          value={requestText}
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

export default RequestForm;