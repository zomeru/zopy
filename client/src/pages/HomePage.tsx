import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import { IProduct } from "../products";
import { Product } from "../components";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    }

    getProducts();
  }, []);

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products &&
          products.map((product) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product {...product} />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default HomePage;
