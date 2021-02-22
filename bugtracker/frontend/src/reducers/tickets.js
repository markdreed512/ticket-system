import { DELETE_TICKET, GET_TICKETS, ADD_TICKET } from "../actions/types.js";

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
      return {
        ...state,
        // filters only items that are not id in action payload
        tickets: state.tickets.filter((ticket) => {
          return ticket.id !== action.payload;
        }),
      };
      case ADD_TICKET:
        return{
            ...state,
            tickets: [...state.tickets, action.payload]
        }
    default:
      return state;
  }
}
