import axios from "../api/axiosconfig";
import { loaduser } from "../reducers/UserSlice";

export const asyngetcart = () => async (dispatch, getState) => {
  try {
    console.log("currentstate :", getState());

    const res = await axios.get("/users");
    console.log("dispatchDATA:", res.data);
    dispatch(loaduser(res.data));
  } catch (error) {
    console.log("ERROR:", err);
  }
};
