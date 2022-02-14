import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";

import { Rating } from "../components";
import { IProduct } from "../products";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<IProduct>({} as IProduct);

  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
      console.log("data", data);
    }

    getProducts();
  }, []);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      {product && (
        <Row>
          <Col md={6}>
            <Image src={product.image} />
          </Col>

          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color="#dfce12"
                />
              </ListGroup.Item>

              <ListGroup.Item>Price: ₱{product.price}</ListGroup.Item>

              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>₱{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? "In stock" : "Out of stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className="btn btn-block"
                    type="button"
                    disabled={product.countInStock === 0}
                    block
                  >
                    Add to cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductPage;
