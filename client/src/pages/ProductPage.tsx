import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from "react-bootstrap";

import { Rating, Loader, Message } from "../components";
import { listProductDetails } from "../actions";
import { RootStore } from "../store";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const productDetails = useSelector(
    (state: RootStore) => state.productDetails
  );
  const dispatch = useDispatch();

  const { error, loading, product } = productDetails;

  console.log("PRODUCT", product);

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {product && (
            <>
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
                            {product.countInStock > 0
                              ? "In stock"
                              : "Out of stock"}
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
            </>
          )}
        </Row>
      )}
    </div>
  );
};

export default ProductPage;
