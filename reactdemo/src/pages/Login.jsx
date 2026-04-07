import { useForm } from "react-hook-form";
import { Container, Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Loginuser } from "../actions/UserActions";

function Login() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const Loginhandler = (user) => {
    console.log(user);

    dispatch(Loginuser(user));

    reset(); // optional
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card
        className="p-4 shadow border-0"
        style={{ width: "26rem", borderRadius: "15px" }}
      >
        {/* Header */}
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
            🔒
          </div>
          <h3 className="mt-3 mb-1">Welcome Back</h3>
          <p className="text-muted" style={{ fontSize: "14px" }}>
            Sign in to continue to your account
          </p>
        </div>

        {/* Form */}
        <Form onSubmit={handleSubmit(Loginhandler)}>
          {/* Email */}
          <Form.Group className="mb-4">
            <Form.Label>Email</Form.Label>
            <Form.Control
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="rounded-pill"
            />
          </Form.Group>

          {/* Password */}
          <Form.Group className="mb-4">
            <div className="d-flex justify-content-between">
              <Form.Label>Password</Form.Label>
              <small className="text-primary" style={{ cursor: "pointer" }}>
                Forgot password?
              </small>
            </div>
            <Form.Control
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter your password"
              className="rounded-pill"
            />
          </Form.Group>

          {/* Button */}
          <Button variant="dark" className="w-100 mb-3" type="submit">
            Login →
          </Button>

          {/* Divider */}
          <div className="d-flex align-items-center my-3">
            <div className="flex-grow-1 border-top"></div>
            <span className="mx-2 text-muted" style={{ fontSize: "12px" }}>
              OR
            </span>
            <div className="flex-grow-1 border-top"></div>
          </div>

          {/* Register */}
          <div className="text-center">
            <small>
              Don't have an account?{" "}
              <Link to="/register" className="text-decoration-none fw-semibold">
                Register
              </Link>
            </small>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;