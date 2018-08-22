import React from 'react';
import { Form, Field } from "react-final-form";
import TextField from '../FormFields/TextField';
import Checkbox from '../FormFields/Checkbox';

const onSubmit = values => {
  window.alert(JSON.stringify(values, 0, 2));
};

const validate = values => {
  const errors = {};
  const requiredFields = ['firstName', 'lastName', 'email', 'password'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
}

const RegisterForm = () => (
  <Form
    onSubmit={onSubmit}
    // initialValues={{ employed: true, stooge: "larry" }}
    validate={validate}
    render={({ handleSubmit, reset, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="firstName"
            component={TextField}
            type="text"
            label="Firs tName"
          // placeholder="First Name"
          />
        </div>
        <div>
          <Field
            name="lastName"
            component={TextField}
            type="text"
            label="Last Name"
          />
        </div>
        <div>
          <Field
            name="email"
            component={TextField}
            type="email"
            label="Email"
          />
        </div>
        <div>
          <label>Are your already logined?</label>
          <Field
            name="employed"
            component={Checkbox}
            type="checkbox"
          />
        </div>
        <div className="buttons">
          <button
            type="submit"
            disabled={submitting || pristine}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={reset}
            disabled={submitting || pristine}
          >
            Reset
          </button>
        </div>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    )}
  />
);

export default RegisterForm;