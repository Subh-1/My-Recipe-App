const initialState = {
    isLoggedIn: false,
    currentUser: null, // Stores the user details (e.g., name, email)
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          isLoggedIn: true,
          currentUser: action.payload,
        };
      case "LOGOUT":
        return {
          ...state,
          isLoggedIn: false,
          currentUser: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  