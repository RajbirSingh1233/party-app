const initialState = {
    user: {},
    loading: false,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_USER_SUCCESS':
        return { ...state, user: action.payload, loading: false };
      case 'FETCH_USER_FAILURE':
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default userReducer;
  