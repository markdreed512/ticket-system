import React, { Component } from "react";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTicket } from '../../actions/tickets' 

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  static propTypes = {
    addTicket: PropTypes.func.isRequired
  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const ticket = { name, email, message }
    this.props.addTicket(ticket)
  }
  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Ticket</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name...</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>message</label>
            <textarea
              type="text"
              className="form-control"
              name="message"
              onChange={this.onChange}
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
}
export default connect(null, { addTicket })(Form);
