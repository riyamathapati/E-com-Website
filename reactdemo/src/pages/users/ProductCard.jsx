import { Card, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <div style={{ height: "200px", overflow: "hidden" }}>
        <Card.Img
          variant="top"
          src={product.image}
          style={{ objectFit: "contain", height: "100%" }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Badge bg="secondary" className="mb-2">
          {product.category}
        </Badge>

        <Card.Title style={{ fontSize: "16px" }}>{product.title}</Card.Title>

        <Card.Text className="text-muted" style={{ fontSize: "14px" }}>
          {product.description.slice(0, 60)}...
        </Card.Text>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <h5 className="text-primary mb-0">₹{product.price}</h5>
          <Link to={`/product/${product.id}`} className="btn btn-dark btn-sm">
            More Info
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
