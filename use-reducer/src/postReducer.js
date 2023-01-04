export const INITIAL_STATE = {
  loading: false,
  payload: {},
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        payload: {},
        error: false,
      };
    case "FETCH_SUCCESS": return {  loading: false, payload: action.payload, error: false};
    case "FETCH_ERROR": return { loading: false, payload: {}, error: true}
    default: return INITIAL_STATE;
  }
};

export default postReducer;