
export const SET_USER = "SET_USER";
export const CLEAR_USER = "CLEAR_USER";

// Action to set user data
export const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

// Action to clear user data
export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};
