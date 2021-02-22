import React, { Fragment } from "react";
import Form from "./Form";
import Tickets from "./Tickets";
function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Tickets />
    </Fragment>
  );
}

export default Dashboard;
