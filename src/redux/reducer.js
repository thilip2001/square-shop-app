const initialState = {
  category: "all",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_CAT":
      return {
        ...state,
        category: payload,
      };
    case "GET_CAT":
      return state;

    default:
      return state;
  }
};
