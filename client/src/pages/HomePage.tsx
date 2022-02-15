import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { IProduct } from "../types";
import { Product, Loader, Message } from "../components";
import { listProducts } from "../actions";
import { RootStore } from "../store";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootStore) => state.productList);

  const { error, loading, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products &&
            products.map((product: IProduct) => {
              return (
                <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                  <Product {...product} />
                </Col>
              );
            })}
        </Row>
      )}
    </div>
  );
};

export default HomePage;
