import axios from "../api/axiosconfig";
import { loaduser,removeuser } from "../reducers/UserSlice";

export const cuurentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) dispatch(loaduser(user));
    else console.log("user not logeed in");
  } catch (error) {
    console.log(error);
  }
};

export const  asyncLogoutUser = () => async (dispatch, getState) => {
  try {
     const user = JSON.parse(localStorage.removeItem("user"));
    if (user) dispatch(removeuser(user));
   else console.log("user not logeed out");
   
    
  } catch (error) {
    console.log(error);
  }
};

export const Loginuser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email.trim()}&password=${user.password.trim()}`,
    );
    // console.log(user.email, user.password)
    console.log(data[0]);
    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log("ERROR:", error);
  }
};
export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log("dispatchDATA:", res.data);
    dispatch(loaduser(res.data));
  } catch (error) {
    console.log("ERROR:", err);
  }
};
