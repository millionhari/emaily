import axios from "axios";
import { FETCH_USER } from "./types";

// const request = axios.get("/api/current_user");
//
// return {
//   type: FETCH_USER,
//   payload: request
// }

// !-- Unrefactored
// export const fetchUser = function() {
//   return function(dispatch) {
//     axios.get("/api/current_user").then(res => {
//       dispatch({
//         type: FETCH_USER,
//         payload: res
//       });
//     });
//   };
// };

// !-- Refactor 1
// export const fetchUser = () => dispatch => {
//   axios
//     .get("/api/current_user")
//     .then(res => dispatch({ type: FETCH_USER, payload: res }));
// };

// !-- Refactor 2
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
