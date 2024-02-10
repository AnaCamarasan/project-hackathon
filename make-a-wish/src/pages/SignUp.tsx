import {
  Form,
  TextInput,
  Button,
} from 'carbon-components-react';

const SignUp = () => {
  return (
    <div style={{ maxWidth: '300px', margin: '0 auto' }}>
      <Form>
        <TextInput
          id="sign-up-name"
          labelText="Name"
          placeholder="Enter your name"
          type="text"
          required
        />
        <TextInput
          id="sign-up-email"
          labelText="Email"
          placeholder="Enter your email"
          type="email"
          required
        />
        <TextInput
          id="sign-up-password"
          labelText="Password"
          placeholder="Enter your password"
          type="password"
          required
        />
        <Button kind="primary" tabIndex={0} type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;