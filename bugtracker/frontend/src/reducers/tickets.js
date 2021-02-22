import { DELETE_TICKET, GET_TICKETS } from "../actions/types.js";

const initialState = {
  tickets: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };
    case DELETE_TICKET:
        return{
            ...state,
            // filters only items that are not id in action payload
            tickets: state.tickets.filter(ticket => {
                return ticket.id !== action.payload 
            })
        }
    default:
      return state;
  }
}
