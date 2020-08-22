import React from 'react';


import { Form, Button } from 'react-bootstrap';

function Volunteer() {   


    return (
        <>
          <Form>
            <Form.Group className="col-md-4 mx-auto">
              <Form.Label htmlFor='email'>First Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your First Name!'
                name='First'
                required
              />
              <Form.Control.Feedback type='invalid'>Name Required</Form.Control.Feedback>
              <Form.Label htmlFor='email'> Last Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your Last Name'
                name='Last'
                required
              />
            </Form.Group>
    
            <Form.Group className="col-md-4 mx-auto">
              <Form.Label htmlFor='password'>Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter your email!'
                name='Email'
                required
              />
              <Form.Label htmlFor='email'>Phone Number</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Your Number!'
                name='Number'
                required
              />
              <Form.Label htmlFor='email'>City</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Your City!'
                name='City'
                required
              />
              
            </Form.Group>
            
            <Form.Group className="col-md-4 mx-auto">
            
              <Button 
                type='submit'
                variant='primary'>
                Submit
              </Button>
              
            </Form.Group>
            <input type="checkbox" name="volunteer" />
                  <label htmlFor="volunteer"> I am a Volunteer</label>
          </Form>
        </>
      );
    };
    
       
    


export default Volunteer;

