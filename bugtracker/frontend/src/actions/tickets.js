import axios from "axios";

import { GET_TICKETS, DELETE_TICKET, ADD_TICKET } from "./types";

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

export const deleteTicket = (id) => (dispatch) => {
  axios
    .delete(`/api/tickets/${id}/`)
    .then((res) => {
      dispatch({
        type: DELETE_TICKET,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addTicket = (ticket) => (dispatch) => {
  axios.post("/api/tickets/",
  ).then((res) => {
    dispatch({
      type: ADD_TICKET,
      payload: res.data,
    });
  });
};
