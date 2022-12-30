import { Col } from "reactstrap";
// import productImg from "../../assets/images/arm-chair-01.jpg";
import "../../styles/product-card.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/CartSlice";
import { toast } from "react-toastify";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItems({
        id: item.id,
        productName: item.productName,
        imgUrl: item.imgUrl,
        price: item.price,
      })
    );

    toast.success("Product added successfully");
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <div className="product__img">
          <motion.img
            whileHover={{ scale: 0.9 }}
            src={item.imgUrl}
            alt="product-img"
          />
        </div>
        <div className="p-2 product-info">
          <Link to={`/shop/${item.id}`}>
            <h3 className="product__name">{item.productName}</h3>
          </Link>
          <span className="text-center d-inline">{item.category} </span>
        </div>

        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">{item.price} naira</span>
          <motion.span whileTap={{ scale: 1.1 }} onClick={addToCartHandler}>
            <i className="ri-add-fill"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
