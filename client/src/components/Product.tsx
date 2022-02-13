import React from "react";
import { Card } from "react-bootstrap";

import { IProduct } from "../products";
import { Rating } from "../components";

const Product = (product: IProduct) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </a>

      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color="#dfce12"
            />
          </div>
        </Card.Text>

        <Card.Text as="h3">₱{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
