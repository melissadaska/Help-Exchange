import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, Button, Card } from 'react-bootstrap';

function Signup() {
  const [formState, setFormState] = useState({ username: '', email: '', password: '', name: '', location: '', number: '' });

  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
    
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form>
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <Card>
          <Card.Header>Sign Up</Card.Header>
          <Card.Body>
            <Form.Group onSubmit={handleFormSubmit}>
              <input
                className='form-input'
                placeholder='Username'
                name='username'
                type='username'
                id='username'
                value={formState.username}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <input
                className='form-input'
                placeholder='Email'
                name='email'
                type='email'
                id='email'
                value={formState.email}
                onChange={handleChange}
              />
              </Form.Group>
              <Form.Group>
              <input
                className='form-input'
                placeholder='Password'
                name='password'
                type='password'
                id='password'
                value={formState.password}
                onChange={handleChange}
              />
              </Form.Group>
              <Form.Group>
              <input
                className='form-input'
                placeholder='Name'
                name='name'
                type='name'
                id='name'
                value={formState.name}
                onChange={handleChange}
              />
              </Form.Group>
              <Form.Group>
              <input
                className='form-input'
                placeholder='Location'
                name='location'
                type='location'
                id='location'
                value={formState.location}
                onChange={handleChange}
              />
              </Form.Group>
              <Form.Group>
              <input
                className='form-input'
                placeholder='Number'
                name='number'
                id='number'
                value={formState.number}
                onChange={handleChange}
              />
              </Form.Group>
              <Button className='btn d-block w-100' type='submit'>
                Submit
              </Button>
            {error && <div>Sign up failed</div>}
          </Card.Body>
        </Card>
      </div>
    </main>
    </Form>
  );
};

export default Signup;
