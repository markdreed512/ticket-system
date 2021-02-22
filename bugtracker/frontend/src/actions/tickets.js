import axios from "axios";

import { GET_TICKETS } from "./types";

export const getTickets = () => (dispatch) => {
  axios
    .get("/api/tickets/")
    .then((res) => {
      dispatch({
        type: GET_TICKETS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
