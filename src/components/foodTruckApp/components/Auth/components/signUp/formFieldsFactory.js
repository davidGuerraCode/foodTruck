const formFieldsDefinition = () => ({
  firstname: {
    elementType: 'input',
    elementConf: {
      placeholder: 'Firstname',
      type: 'text',
      name: 'firstname'
    },
    icon: 'fas fa-user',
    value: '',
    validation: {
      required: true
    }
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
    value: '',
    validation: {
      required: true
    }
  },
  password: {
    elementType: 'input',
    elementConf: {
      placeholder: 'Password',
      type: 'password',
      name: 'password'
    },
    icon: 'fas fa-lock',
    value: '',
    validation: {
      required: true
    }
  },
  confirmPassword: {
    elementType: 'input',
    elementConf: {
      placeholder: 'Confirm password',
      type: 'password',
      name: 'confirm password'
    },
    icon: 'fas fa-lock',
    value: '',
    validation: {
      required: true
    }
  }
});

export default formFieldsDefinition;
