// import React, { Component, PropTypes } from 'react';
// import { Form, Field } from "react-final-form";
// import TextField from '../FormFields/TextField';

// const validate = values => {
//   const errors = {};
//   const requiredFields = ['firstName', 'lastName', 'email', 'password'];

//   requiredFields.forEach(field => {
//     if (!values[field]) {
//       errors[field] = 'Required';
//     }
//   })
//   if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// }


// class LoginForm extends Component {
//   handleSubmit() {

//   }

//   render() {
//     const { handleSubmit, pristine, reset, submitting } = this.props;
//     return (
//       <form className="login-form" onSubmit={() => this.handleSubmit}>
//         <div>
//           <Field name="firstName" component={TextField} label="First Name" />
//         </div>
//         <div>
//           <Field name="lastName" component={TextField} label="Last Name" />
//         </div>
//         <div>
//           <Field name="email" component={TextField} label="Email" />
//         </div>
//         <div>
//           <Field name="password" component={TextField} label="Password" />
//         </div>
//         <button type="submit" disabled={pristine || submitting}>Submit</button>
//       </form>
//     );
//   }
// }

// export default reduxForm({
//   form: 'login-form',  // a unique identifier for this form
//   validate,
// })(LoginForm);
