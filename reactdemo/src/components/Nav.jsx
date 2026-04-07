import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate , NavLink } from "react-router-dom";
import { asyncLogoutUser } from "../actions/UserActions";

const Nav = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.data);
 const  navigate =useNavigate()
  const handleLogout = () => {
    dispatch(asyncLogoutUser());
    navigate("/")
  };
  const loginhandler=()=>{
    navigate("/")
  }

  return (
    <nav className="d-flex justify-content-between align-items-center px-4 mt-2 mb-5">
      
      {/* LEFT SIDE */}
      <div className="d-flex gap-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Products">Products</NavLink>
        {user && (
          <NavLink to="/admin/CreateProduct">Create Product</NavLink>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="d-flex align-items-center gap-3">
        {user ? (
          <>
            <span className="fw-bold">
              👤 {user?.username || user?.email}
            </span>
            <button className="btn btn-dark btn-sm" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <NavLink to="/Login" onClick={loginhandler}>Login</NavLink>
        )}
      </div>
    </nav>
  );
};

export default Nav;