import {
    Form,
    TextInput,
    Button,
    Link
  } from 'carbon-components-react';
  
  const Login = () => {
    return (
      <div style={{ maxWidth: '300px', margin: '0 auto' }}>
        <Form>
          <TextInput
            id="login-email"
            labelText="Email"
            placeholder="Enter your email"
            type="email"
            required
          />
          <TextInput
            id="login-password"
            labelText="Password"
            placeholder="Enter your password"
            type="password"
            required
          />
          <Button kind="primary" tabIndex={0} type="submit">
            Log In
          </Button>
          <div style={{ marginTop: '1rem' }}>
            <Link href="/sign-up">
              Don't have an account? Sign Up
            </Link>
          </div>
        </Form>
      </div>
    );
  };
  
  export default Login;