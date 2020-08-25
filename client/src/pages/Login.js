import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { Form, FormControl, Button } from 'react-bootstrap';

function Login(props) {
  const [loginState, setLoginState] = useState({ email: '', password: '' });

  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginState({ ...loginState, [name]: value });
  };

  // submit form
  const handleFormSubmit = async event => {
    event.preventDefault();

    try {
      const { data } = await login({ variables: { ...loginState } });
    
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Form>
    <main className='flex-row justify-center mb-4'>
      <div className='col-12 col-md-6'>
        <div className='card'>
          <h4 className='card-header'>Login</h4>
          <div className='card-body'>
            <Form.Group onSubmit={handleFormSubmit}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" id="email" value={loginState.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="*******" name='password' id='password' value={loginState.password} onChange={handleChange}/>
            </Form.Group>
            <Button variant='primary' onClick={handleFormSubmit}>Login</Button>
            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
    </Form>
  );
};

export default Login;
