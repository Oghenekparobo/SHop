import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/ui/CommonSection";
import "../styles/cart.css";

import { motion } from "framer-motion";

// import tdImg from "../assets/images/arm-chair-01.jpg";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="shopping-cart">
      <CommonSection title="shopping-cart"> </CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">No items added to cart</h2>
              ) : (
                <div className="d-flex align-items-center justify-content-center">
                  <table className="table bordered">
                    <thead>
                      <tr>
                        <th>image</th>
                        <th>title</th>
                        <th>price</th>
                        <th>qty</th>
                        <th>delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => (
                        <Tr item={item} key={item.id} />
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </Col>
            <Col lg="3">
              <div className="d-flex align-items-center justify-content-between">
                <h6>SubTotal</h6>
                <span className="fs-4 fw-bold"> {totalAmount} naira </span>
              </div>
              <p className="fs-6 mt-6">
                taxes and shipping will be calculated on checkout
              </p>
              <div className="">
                <Link to="/checkout" >
                  <button className="shop__btn w-100">Checkout</button>
                </Link>
                <Link to="/shop" >
                  <button className="shop__btn w-100 mt-2">Continue Shopping</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();

  const deleteItemHandler = () => {
    dispatch(cartActions.removeItem(item.id));
  };
  return (
    <tr key={item.id}>
      <td>
        <img src={item.imgUrl} alt="td-pic" />{" "}
      </td>
      <td>{item.productName}</td>
      <td> {item.price} </td>
      <td>{item.quantity}</td>
      <td whileTap={{ scale: 1.2 }}>
        <span>
          <motion.i
            class="ri-delete-bin-line"
            onClick={deleteItemHandler}
          ></motion.i>
        </span>
      </td>
    </tr>
  );
};

export default Cart;
