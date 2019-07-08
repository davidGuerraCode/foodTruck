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

import React, { useReducer, useState } from 'react';

import style from './signUp.module.css';
import { Help } from '../../../hoc';
import { Background } from '../../../UI/';
import { Card } from '../../../UI';
import { TitleLabel } from '../../../UI';
import { Input } from '../../../UI';
import { UpdateFormField } from './actions';
import reducer from './signUpReducer';
import formFieldsDefinition from './formFieldsFactory';
import checkValidity from './formFieldValidator';
import useForm from './useForm';

const signUpContainer = props => {
  const [inputFactory, dispatch] = useReducer(reducer, formFieldsDefinition());
  const [formIsValid, setFormIsValid] = useState(false);
  const { values, onChangeHandler, errors } = useForm(checkValidity);
  const buttonClasses = ['btn my-3'];
  const formElementsArray = [];

  console.log('[!]', errors);

  if (!formIsValid) {
    buttonClasses.push('disabled');
  }

  const registerHandler = event => {
    event.preventDefault();

    const formData = {};

    for (const formElementIdentifier in inputFactory) {
      if (inputFactory.hasOwnProperty(formElementIdentifier)) {
        formData[formElementIdentifier] = inputFactory[formElementIdentifier].value;
      }
    }
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
      <div key={el.id}>
        <Input
          changeHandler={onChangeHandler}
          elementType={el.conf.elementType}
          elementConf={el.conf.elementConf}
          value={values[el.conf.value]}
          icon={el.conf.icon}
        />
        {Object.keys(errors).length > 0 && (
          <div className="error_message">{errors[el.id]}</div>
        )}
      </div>
    );
  });

  return (
    <Help>
      <Background />
      <div className={style.container}>
        <Card>
          <TitleLabel>Sign Up</TitleLabel>
          <div className={style.formContainer}>
            <form onSubmit={registerHandler} className={style.form}>
              {inputs}
              <button
                title="Fill the form to sign up"
                type="submit"
                disabled={!formIsValid}
                className={buttonClasses.join(' ')}
              >
                Sign Up
              </button>
              <p className={style.changeSignin}>
                Have an account? <span className={style.link}>Sign In.</span>
              </p>
            </form>
          </div>
        </Card>
      </div>
    </Help>
  );
};

export default signUpContainer;
