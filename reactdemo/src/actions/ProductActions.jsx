import axios from "../api/axiosconfig";
import { loadproduct } from "../reducers/ProductSlice";

// LOAD PRODUCTS
export const asyncLoadProduct = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/products"); 

    dispatch(loadproduct(data));
    // console.log("from Products action", data);

  } catch (error) {
    console.log("ERROR:", error);
  }
};

// CREATE PRODUCT
export const asyncreateproduct = (product) => async (dispatch) => {
  try {
    console.log("Sending product:", product);

    await axios.post("/products", product);

    dispatch(asyncLoadProduct());

  } catch (error) {
    console.log("ERROR:", error); 
  }
};