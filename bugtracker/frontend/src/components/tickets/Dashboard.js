import React, { useState } from "react";
import Form from "./Form";
import Tickets from "./Tickets";
import TicketsContext from './TicketsContext'

function Dashboard() {

  const [tickets, setTickets] = useState([])

  return (
    <>
      <TicketsContext.Provider value={[tickets, setTickets]}>
        <Form />
        <Tickets />
      </TicketsContext.Provider>
    </>
  );
}

export default Dashboard;
