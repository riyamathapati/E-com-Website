import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncreateproduct } from "../../actions/ProductActions";

function CreateProduct() {
  const { register, handleSubmit, watch, reset } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateProducthandler = (product) => {
    product.id = nanoid();
    product.price = Number(product.price);

    // console.log(product);

    dispatch(asyncreateproduct(product));
    reset();
    navigate("/Products");
  };
  const watchAll = watch();
  const imageUrl = watch("image");

  return (
    <Container fluid className="py-4 px-5">
      <div className="mb-4">
        <h2 className="fw-bold">Add New Product</h2>
        <p className="text-muted">
          Create and preview your product in real time
        </p>
      </div>

      <Row>
        {/* LEFT FORM */}
        <Col md={7}>
          <Form
            onSubmit={handleSubmit(CreateProducthandler)}
            className="p-4 shadow-sm bg-light rounded"
          >
            <Form.Group className="mb-3">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                {...register("title", { required: true })}
                placeholder="Enter title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                {...register("price", { required: true })}
                type="number"
                placeholder="₹ 0.00"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select {...register("category")}>
                <option value="">Select Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="books">Books</option>
                <option value="home decor">Home Decor</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                {...register("description")}
                as="textarea"
                rows={4}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="url"
                placeholder="Paste image URL"
                {...register("image")}
              />
            </Form.Group>

            <Button type="submit" variant="dark" size="lg" className="w-100">
              Create Product →
            </Button>
          </Form>
        </Col>

        {/* RIGHT PREVIEW */}
        <Col md={5}>
          <Card className="shadow border-0">
            <Card.Body>
              <h5 className="mb-3">Live Preview</h5>

              <div
                style={{
                  height: "200px",
                  background: "#f5f5f5",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/300";
                    }}
                  />
                ) : (
                  <div className="d-flex justify-content-center align-items-center h-100 text-muted">
                    No Image
                  </div>
                )}
              </div>

              <div className="mt-3">
                <h6 className="fw-bold">{watchAll.title || "Product Title"}</h6>

                <p className="text-muted mb-1">
                  {watchAll.description || "Product description..."}
                </p>

                <div className="d-flex justify-content-between align-items-center">
                  <span className="fw-bold">₹ {watchAll.price || "0"}</span>
                  <span className="badge bg-dark">
                    {watchAll.category || "Category"}
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateProduct;
