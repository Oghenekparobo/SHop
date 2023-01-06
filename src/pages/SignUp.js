import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import "../styles/login.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  console.log(profilePic);

  const submitHandler = (e) => {
    e.preventDefault();
    
  };
  return (
    <Helmet title="Signup">
      <section>
        <Container>
          <Row>
            <Col lg="6" className="m-auto text-center">
              <h3 className="fw-bold fs-4 mb-4">Signup</h3>

              <Form className="auth__form" onSubmit={submitHandler} >
              <FormGroup className="form-group">
                  <input
                    type="text"
                    placeholder="enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </FormGroup>
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
                <FormGroup className="form-group">
                  <input
                    type="file"
                    onChange={(e) => {setProfilePic(e.target.files[0])}}
                    required
                  />
                </FormGroup>
                <button className="shop__btn auth__btn">Create an account</button>
                <p>
                  already have an account? <Link to="/login">Login</Link>{" "}
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignUp;
