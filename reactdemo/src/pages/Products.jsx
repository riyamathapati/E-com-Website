import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductCard from "./users/ProductCard";

const Products = () => {
  const products= useSelector((state)=>state.productReducer.data);
  // console.log("Products ---------->",products);
  return (
    products.length > 0 ?(
        <Container className="mt-4">
          <Row>
            {products.map((product) => (
              <Col
                key={product.id}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                className="mb-4"
              >
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>
        </Container>
      )  : "Lodding ..."
  );
};

export default Products;
