import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { InputGroup, InputGroupAddon, Button, Input, Row, Col } from "reactstrap";
import { useFormInput, useError } from "./accountsUtils";

function Login() {
  const email = useFormInput("");
  const password = useFormInput("");
  const { error, setError } = useError(null);
  const [isAuth, setAuth] = useState(false);
  // log the user in
  function handleLogin(e) {
    e.preventDefault();
    Meteor.loginWithPassword(email.value, password.value, err => {
      err ? setError(err.reason) : setAuth(true);
    });
  }
  //
  if (isAuth) {
    return <Redirect to="/post" />;
  }
  return (
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
        <h5 className='text-center'>Login</h5>
        <form onSubmit={handleLogin}>
          <InputGroup>
            <InputGroupAddon addonType="prepend">@</InputGroupAddon>
            <Input placeholder="username" {...email} required />
          </InputGroup>
          <br />
          <InputGroup>
            <InputGroupAddon addonType="prepend">&#128274;</InputGroupAddon>
            <Input
              placeholder="password"
              type="password"
              {...password}
              required
            />
          </InputGroup>
          <br />
          <Button color="primary" role="submit">
            submit
          </Button>
          <p className="text-danger">{error && error}</p>
        </form>
      </Col>
    </Row>
  );
}

export default Login;
