import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../actions/UserActions";
import { useDispatch } from "react-redux";

function Register() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Registerhandler = (user) => {
    const newUser = {
      ...user,
      id: nanoid(),
      isAdmin: false,
    };

    console.log("Register User:", newUser);

    dispatch(asyncRegisterUser(newUser));
    reset();
    navigate("/login"); 
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="p-4 shadow border-0"
        style={{ width: "26rem", borderRadius: "15px" }}
      >
     
        <div className="text-center mb-4">
          <div
            style={{
              width: "60px",
              height: "60px",
              margin: "0 auto",
              borderRadius: "15px",
              backgroundColor: "#212529",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
            }}
          >
            📝
          </div>
          <h3 className="mt-3 mb-1">Create Account</h3>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Sign up to get started
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={handleSubmit(Registerhandler)}>
          
          <Form.Group className="mb-4">
            <Form.Label>Username</Form.Label>
            <Form.Control
              {...register("username", { required: true })}
              type="text"
              placeholder="Enter username"
              className="rounded-pill"
            />
          </Form.Group>


          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter email"
              className="rounded-pill"
            />
          </Form.Group>

         
          <Form.Group className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter password"
              className="rounded-pill"
            />
          </Form.Group>

          <Button variant="dark" className="w-100 mb-3" type="submit">
            Register →
          </Button>

         
          <div className="d-flex align-items-center my-3">
            <div className="flex-grow-1 border-top"></div>
            <span className="mx-2 text-muted" style={{ fontSize: "12px" }}>
              OR
            </span>
            <div className="flex-grow-1 border-top"></div>
          </div>

        
          <div className="text-center">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none fw-semibold">
                Login
              </Link>
            </small>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;