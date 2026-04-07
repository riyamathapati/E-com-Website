import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Productdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const products = useSelector((state) => state.productReducer.data);

  // const {
  //   productReducer: { products},
  //   userReducer: { data },

  // }= useSelector((state)=>state)
  const products = useSelector((state) => state.productReducer.data);
  const currentUser = useSelector((state) => state.userReducer.data);
  const isadmin = currentUser?.isAdmin;
  console.log("admin",isadmin)
  console.log("All Products in Productdetails:", products);
  console.log("All Products in currentUser:", currentUser);
  const product = products?.find((p) => p.id == id);
  console.log("Product in Productdetails:", product);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: product?.title || "",
      price: product?.price || "",
      category: product?.category || "",
      description: product?.description || "",
      image: product?.image || "",
    },
  });
  const UpdateProducthandler = (data) => {
    const updatedProduct = {
      ...data,
      id: id, // keep same ID
      price: Number(data.price),
    };

    dispatch(asynupdateproduct(updatedProduct));
    reset();
    navigate("/Products");
  };

  if (!product) return <h2 className="text-center mt-5">Product Not Found</h2>;

  return product ? (
    <Container fluid className="p-4">
      {/* Back Button */}
      <Button
        variant="dark"
        size="sm"
        className="mb-3"
        onClick={() => navigate(-1)}
      >
        ← Back
      </Button>

      <Row className="g-4">
        {/* LEFT SIDE - IMAGE */}
        <Col md={6}>
          <img
            src={product.image}
            alt="product"
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400";
            }}
          />

          <h2 className="mt-3">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <span className="badge bg-dark">{product.category}</span>
          <h3 className="mt-2">₹ {product.price}</h3>
        </Col>

        {/* RIGHT SIDE - FORM */}

        { isadmin ? ( <Col md={6}>
          <Form
            onSubmit={handleSubmit(UpdateProducthandler)}
            className="p-4 shadow-sm bg-light rounded"
          >
            <h4 className="mb-3">Update Product</h4>

            <Form.Group className="mb-3">
              <Form.Label>Product Title</Form.Label>
              <Form.Control
                defaultValue={product.title}
                {...register("title", { required: true })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                defaultValue={product.price}
                {...register("price", { required: true })}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                defaultValue={product.category}
                {...register("category")}
              >
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
                as="textarea"
                rows={4}
                defaultValue={product.description}
                {...register("description")}
              />
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="url"
                defaultValue={product.image}
                {...register("image")}
              />
            </Form.Group>

            <Button type="submit" variant="dark" size="lg" className="w-100">
              Update Product →
            </Button>
            {/* <Button type="button" variant="dark" size="lg" className="w-100"
            onClick={DeleteProduct}>
              Delete Product →
            </Button> */}
          </Form>
        </Col>):(<Col md={6}>
          <h4 className="mb-3">Update Product</h4>
          <p>You are not authorized to update this product.</p>
        </Col>)}
       
      </Row>
    </Container>
  ) : (
    "Loading..."
  );
};

export default Productdetails;
