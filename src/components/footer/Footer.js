import React from "react";

// import logo from "../../assets/images/eco-logo.png";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <Container>
        <Row>
          <Col lg="4">
            <div className="nav__logo">
              <div className="text-white">
                <h1>SHop</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Minimalist and modern furniture pieces create strong, clean lines
              that provide a timeless statement. Shop everything from minimalist
              desks and bookcases to minimalist sectional couches. We're sure
              you'll find a stylish piece that you'll love.
            </p>
          </Col>
          <Col lg="2">
            <div className="footer__quick-links ">
              <h4 className="footer__links-title">Useful Links</h4>
              <ListGroup className="mt-4">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
            <div className="footer__quick-links ">
              <h4 className="footer__links-title">Top Categories.</h4>
              <ListGroup className="mt-4">
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3">
            <div className="footer__quick-links ">
              <h4 className="footer__links-title">Contact</h4>
              <ListGroup className="mt-4">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-map-pin-line"></i>
                  </span>
                  <p>32 Antartic close, oshodi</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-phone-line"></i>
                  </span>
                  <p>090531111</p>
                </ListGroupItem>
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i className="ri-mail-line"></i>
                  </span>
                  <p>shop@furn.work</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="12" className="text-center mt-4">
            <p> Copyright {new Date().getFullYear()} developed by stephen</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
