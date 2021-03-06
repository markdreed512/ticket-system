import React, { useState, useContext } from "react";
import PropTypes from 'prop-types'
import TicketsContext from './TicketsContext'

const Form = (props) => {
  const [tickets, setTickets] = useContext(TicketsContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onNameChange = (e) => setName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setTickets([...tickets,{
      name,
      email,
      message
    }])
    console.log(formData)
  }
  
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Ticket</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={onNameChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={onEmailChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>message</label>
            <textarea
              type="text"
              className="form-control"
              name="message"
              onChange={onMessageChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  
}
export default Form;
