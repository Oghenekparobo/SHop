import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email , password);
  };
  return (
    <Helmet title="login">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold fs-4 mb-4">Login</h3>

              <Form className="auth__form" onSubmit={submitHandler} >
                <FormGroup className="form-group">
                  <input
                    type="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <input
                    type="password"
                    placeholder="enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormGroup>
                <button className="shop__btn auth__btn">Login</button>
                <p>
                  Don't have an account? <Link to="/signup">Create one</Link>{" "}
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
