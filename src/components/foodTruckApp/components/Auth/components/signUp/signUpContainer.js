/**
 * Container component, here we manage all the events and data associated with the
 * signup form.
 *
 * <Background>
 *  <Form>
 *    <TitleLabel>SignUp</TitleLabel>
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

import style from './signUp.module.css';
import { Aux } from '../../../hoc';
import { Background } from '../../../UI/';
import { Card } from '../../../UI';
import { TitleLabel } from '../../../UI';
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

  const [inputFactory, setInputFactory] = userReducer(formFieldReducer, initState);
  const formElementsArray = [];

  for (const key in inputFactory) {
    if (inputFactory.hasOwnProperty(key)) {
      formElementsArray.push({
        id: key,
        conf: inputFactory[key]
      });
    }
  }

  const inputs = formElementsArray,map(el => {
    // TODO Render Input component
  })

  return (
    <Aux>
      <Background />
      <div className={style.container}>
        <Card>
          <TitleLabel>Sign Up</TitleLabel>
          <div className={style.formContainer}>
            <form className={style.form}>
              <input />
              <input />
              <input />
              <input />
              <input />
              <Button type="button" className="btn my-3">
                Sign Up
              </Button>
              <p className={style.changeSignin}>
                Have an account? <span className={style.link}>Sign In.</span>
              </p>
            </form>
          </div>
        </Card>
      </div>
    </Aux>
  );
};

export default signUpContainer;
