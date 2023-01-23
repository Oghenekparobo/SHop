import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, FormGroup, Row } from "reactstrap";
import { useNavigate} from "react-router-dom";

import Helmet from "../components/helmet/Helmet";
import AuthContext from "../store/auth-context";
import "../styles/login.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [profilePic, setProfilePic] = useState("");
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  // console.log(profilePic);

  const submitHandler = (e) => {
    e.preventDefault();
    
    fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5_GzbVBSoXJDHT6rhpV7M9spFZ4dsT-E' , {
      method:'POST',
      body:JSON.stringify({
        email:email,
        password:password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then( async (res) => {
      if (res.ok) {
        return await res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = 'Authentication failed!';
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }

          throw new Error(errorMessage);
        });
      }
    })
    .then((data) => {
      const expirationTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );
      authCtx.login(data.idToken, expirationTime.toISOString());
      navigate('/login');
    })
    .catch((err) => {
      alert(err.message);
    });
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
                {/* <FormGroup className="form-group">
                  <input
                    type="file"
                    onChange={(e) => {setProfilePic(e.target.files[0])}}
                    required
                  />
                </FormGroup> */}
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
