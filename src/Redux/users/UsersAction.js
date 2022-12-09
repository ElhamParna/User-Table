import axios from "axios";
//reguest loading
const fetchUsersRequest = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};
//reguest success
const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};
//error
const fetchUsersFailure = (error) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: error,
  };
};

//arrow function give dispatch
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest()); //request
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchUsersSuccess(users));  // success
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(error)); //error
      });
  };
};
