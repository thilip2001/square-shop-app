export const addCart = (product) =>{
    return {
        type : "ADDITEM",
        payload: product
    }
}
export const removeCart = (product) => {
  return {
    type: "REMOVEITEM",
    payload: product,
  };
};