import React, { useEffect } from "react";
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/helmet/Helmet";
import CommonSection from "../components/ui/CommonSection";
import { Col, Container, Row } from "reactstrap";
import "../styles/product-details.css";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductList from "../components/ui/ProductList";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/CartSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const [tab, setTab] = useState("desc");
  const [rating, setRating] = useState(null);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");

  const dispatch = useDispatch();

  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      reviewMessage: reviewUserMsg,
      rating,
    };

    console.log(reviewObj);
    toast.success("Your Feedback has been submitted");
  };

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItems({
        id,
        name: productName,
        image: imgUrl,
        price,
      })
    );

    toast.success("Product added successfully");
  };

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="imgUrl" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className=" product__rating d-flex align-items-center gap-5 mb-4">
                  <div>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span onClick={() => setRating(3)}>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-fill"></i>
                    </span>
                  </div>
                  <p>
                    ( <span>{avgRating}</span> rating)
                  </p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product__price">{price} Naira</span>
                  <p>category: {category} </p>
                </div>

                <p className="product__desc mt-3">{shortDesc}</p>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="shop__btn"
                  onClick={addToCartHandler}
                >
                  Add To Cart
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "rev" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  (Reviews {reviews.length})
                </h6>
              </div>
              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p> {description} </p>
                </div>
              ) : (
                <div className="product__review">
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item, index) => (
                        <li className="pt-4" key={index}>
                          <h4>GUDOGN</h4>
                          <span> {item.rating} (rating)</span>{" "}
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Leave Your Experiene</h4>
                      <form onSubmit={submitHandler}>
                        <div className="form-group">
                          <input
                            ref={reviewUser}
                            type="text"
                            placeholder="enter name......"
                          />
                        </div>
                        <div className="rating__group  form-group d-flex align-items-center gap-5">
                          <span onClick={() => setRating(1)}>
                            1 <i className="ri-star-fill"></i>
                          </span>
                          <span onClick={() => setRating(2)}>
                            2<i className="ri-star-fill"></i>
                          </span>
                          <span onClick={() => setRating(3)}>
                            3<i className="ri-star-fill"></i>
                          </span>
                          <span onClick={() => setRating(4)}>
                            4 <i className="ri-star-fill"></i>
                          </span>
                          <span onClick={() => setRating(5)}>
                            5 <i className="ri-star-fill"></i>
                          </span>
                        </div>

                        <div className="form-group">
                          <textarea
                            ref={reviewMsg}
                            rows="4"
                            placeholder="Review message.."
                            required
                          ></textarea>
                        </div>

                        <button className="shop__btn"> Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12">
              <h2 className="related__title mt-5">
                You might like other related products
              </h2>
            </Col>
            <ProductList product={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetail;
