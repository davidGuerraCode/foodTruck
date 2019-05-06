/* eslint-disable react-hooks/rules-of-hooks */
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

import React, { useReducer, useRef } from 'react';

import style from './signUp.module.css';
import { Aux } from '../../../hoc';
import { Background } from '../../../UI/';
import { Card } from '../../../UI';
import { TitleLabel } from '../../../UI';
import { Input } from '../../../UI';
import { UpdateFormField } from './actions';
import reducer from './signUpReducer';

const signUpContainer = props => {
  const initState = {
    firstname: {
      elementType: 'input',
      elementConf: {
        placeholder: 'Firstname',
        type: 'text',
        name: 'firstname'
      },
      icon: 'fas fa-user',
      value: ''
    },
    lastname: {
      elementType: 'input',
      elementConf: {
        placeholder: 'Lastname',
        type: 'text',
        name: 'lastname'
      },
      icon: 'fas fa-user',
      value: ''
    },
    email: {
      elementType: 'input',
      elementConf: {
        placeholder: 'Email',
        type: 'email',
        name: 'email'
      },
      icon: 'fas fa-envelope',
      value: ''
    },
    password: {
      elementType: 'input',
      elementConf: {
        placeholder: 'Password',
        type: 'password',
        name: 'password'
      },
      icon: 'fas fa-lock',
      value: ''
    },
    confirmPassword: {
      elementType: 'input',
      elementConf: {
        placeholder: 'Confirm password',
        type: 'password',
        name: 'confirm password'
      },
      icon: 'fas fa-lock',
      value: ''
    }
  };

  const [inputFactory, dispatch] = useReducer(reducer, initState);
  const formElementsArray = [];
  const buttonElement = useRef(null);

  const enableBtn = refElement => {
    refElement.current.removeAttribute('disabled');
    refElement.current.classList.remove('disabled');
  };

  const changeHandler = (event, id) => {
    // Validate inputs
    // If are valid
    // Allow send form
    dispatch(UpdateFormField({ inputIdentifier: id, value: event.target.value }));
    // validateField(event);
    enableBtn(buttonElement);
  };

  const registerHandler = event => {
    event.preventDefault();

    const formData = {};

    for (const formElementIdentifier in inputFactory) {
      if (inputFactory.hasOwnProperty(formElementIdentifier)) {
        formData[formElementIdentifier] = inputFactory[formElementIdentifier].value;
      }
    }

    console.log('To send', formData);
  };

  for (const key in inputFactory) {
    if (inputFactory.hasOwnProperty(key)) {
      formElementsArray.push({
        id: key,
        conf: inputFactory[key]
      });
    }
  }

  const inputs = formElementsArray.map(el => {
    return (
      <Input
        changeHandler={event => changeHandler(event, el.id)}
        elementType={el.conf.elementType}
        elementConf={el.conf.elementConf}
        value={el.conf.value}
        icon={el.conf.icon}
        key={el.id}
      />
    );
  });

  return (
    <Aux>
      <Background />
      <div className={style.container}>
        <Card>
          <TitleLabel>Sign Up</TitleLabel>
          <div className={style.formContainer}>
            <form onSubmit={registerHandler} className={style.form}>
              {inputs}
              <button
                ref={buttonElement}
                type="submit"
                disabled
                className="btn disabled my-3">
                Sign Up
              </button>
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
