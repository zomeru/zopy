import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { IProduct } from "../types";
import { Product } from "../components";
import { listProducts } from "../actions";
import { RootStore } from "../store";

const HomePage = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state: RootStore) => state.productList);

  const { error, loading, products } = productList;

  console.log("PRODUCRT LIST", productList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
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
