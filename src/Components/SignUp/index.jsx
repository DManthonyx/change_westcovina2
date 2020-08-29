import React from './node_modules/react';
import { Form, TextField, SubmitField } from './node_modules/react-components-form';
import Schema from './node_modules/form-schema-validation';
 
const signUpSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
 
const LoginForm = () => (
  <Form
    schema={loginSchema}
    onSubmit={model => console.log(model)}
    onError={(errors, data) => console.log('error', errors, data)}
  >
    <TextField name="login" label="Login" type="text" />
    <TextField name="password" label="Password" type="text" />
    <SubmitField value="Submit" />
  </Form>
);
 
export default LoginForm;