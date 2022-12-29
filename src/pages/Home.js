import React, { useEffect, useState } from "react";
import Helmet from "../components/helmet/Helmet";
import heroImg from "../assets/images/hero-img.png";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";

import "../styles/home.css";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import ProductList from "../components/ui/ProductList";
import products from "../assets/data/products";
import Clock from "../components/ui/Clock";

import counterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobilleProducts, setMobilleProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteresBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );

    const filteredMobilleProducts = products.filter(
      (item) => item.category === "mobile"
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteresBestSalesProducts);
    setMobilleProducts(filteredMobilleProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <Helmet title={"home"}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtititle">Trending Products In {year}</p>
                <h2>giving your a minimalistic and classic interior.</h2>
                <p>
                  We believe surrounding ourselves with beauty helps us live
                  better. That’s why since 1986 we have been carefully selecting
                  the best furniture and accessories for homes, workplaces and
                  public spaces all over the world.
                </p>
                <Link to={"/shop"}>
                  <motion.button
                    whileTap={{ scale: 1.1 }}
                    className="shop__btn"
                  >
                    SHOP NOW
                  </motion.button>
                </Link>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-pic" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductList product={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductList product={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer-counter">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count__down-col">
              <div className="clock__top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Chairs</h3>
              </div>
              <Clock />
              <Link to={"/shop"}>
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="store__btn p-2 m-2"
                >
                  Visit Store
                </motion.button>
              </Link>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="timer-pic" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new__arrivals mb-4">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">New Arrivals</h2>
            </Col>
            <ProductList product={mobilleProducts} />
            <ProductList product={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category mb-5-">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Popular</h2>
            </Col>
            <ProductList product={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
