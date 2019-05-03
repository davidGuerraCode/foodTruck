/**
 * Container component, here we manage all the events and data associated with the
 * signup form.
 *
 * <Background>
 *  <Form>
 *    <HeadingLabel>SignUp</HeadingLabel>
 *    <SignUp>
 *      <Input />
 *      <Button />
 *    </SignUp>
 * </Form>
 * </Background>
 *
 *
 *
 * Take the user data and send via ajax to the server to persisted
 */

import React, { userReducer } from 'react';

import { Aux } from '../../../hoc';
import { Button } from '../../../UI';

const signUpContainer = props => {
  const initState = {
    firstname: {
      elementType: 'input',
      elementConfig: {
        placeholder: 'Firstname',
        type: 'text',
        name: 'firstname'
      },
      icon: 'fas fa-user',
      value: ''
    },
    lastname: {
      elementType: 'input',
      elementConfig: {
        placeholder: 'Lastname',
        type: 'text',
        name: 'lastname'
      },
      icon: 'fas fa-user',
      value: ''
    },
    email: {
      elementType: 'input',
      elementConfig: {
        placeholder: 'Email',
        type: 'email',
        name: 'email'
      },
      icon: 'fas fa-envelope',
      value: ''
    },
    password: {
      elementType: 'input',
      elementConfig: {
        placeholder: 'Password',
        type: 'password',
        name: 'password'
      },
      icon: 'fas fa-lock',
      value: ''
    },
    confirmPassword: {
      elementType: 'input',
      elementConfig: {
        placeholder: 'Confirm password',
        type: 'password',
        name: 'confirm password'
      },
      icon: 'fas fa-lock',
      value: ''
    }
  };

  /* const [inputFactory, setInputFactory] = userReducer(formFieldReducer, initState);
  const formElementsArray = []; */

  return (
    <Aux>
      <h1>SigUp From</h1>
      <Button>Sign Up</Button>
    </Aux>
  );
};

export default signUpContainer;
