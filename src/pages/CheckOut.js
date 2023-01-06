import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/ui/CommonSection";
import { Col, Container, FormGroup, Row, Form } from "reactstrap";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold">Billing Information</h6>
              <Form className="billing__form">
                <FormGroup className="form-group">
                  <input type="text" placeholder=" name" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="email" placeholder="email" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="number" placeholder="phone number" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="Street Address" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder=" city" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="text" placeholder="country" />
                </FormGroup>
                <FormGroup className="form-group">
                  <input type="number" placeholder="postal code" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
                <h6>
                  Total Qty: <span>{totalQty}</span>
                </h6>
                <h6>
                  Subtotal: <span>{totalAmount}</span>
                </h6>
                <h6>
                  Shipping: <br /> Free Shipping <span>0 naira</span>
                </h6>
                <h4>
                  Total Cost: <span>120</span>
                </h4>
                <div className="shop__btn auth__btn">Place an Order</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;
