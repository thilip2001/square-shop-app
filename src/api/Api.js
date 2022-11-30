import { url } from "../constants/constants";

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${url}/products`);
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("in else", response);
    }
  } catch (err) {
    return false;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${url}/products/${id}`);
    if (response.status === 200) {
      return response.json();
    } else {
      console.log("in else", response);
    }
  } catch (err) {
    return false;
  }
};

export const getCategoryProducts = async (cat) => {
  try {
    const response = await fetch(`${url}/products/category/${cat}`);
    if (response.status === 200) {
      console.log(response);
      return response.json();
    } else {
      console.log("in else", response);
    }
  } catch (err) {
    return false;
  }
};
