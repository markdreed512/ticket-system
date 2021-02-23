// import React, { Component, Fragment } from 'react';
// import { withAlert } from "react-alert";


// export class Alerts extends Component {
//     componentDidMount(){
//         this.props.alert.show("it works.")
//     }
//     render() {
//         return <Fragment >Alerts component</Fragment >
//     }
// }
// // export default Alerts
// export default withAlert(Alerts); 
import React, { Fragment, useEffect } from 'react'
import { withAlert } from 'react-alert'

const Alerts = ({ alert }) => {
    useEffect(() => {
        alert.show("it works.")
      });
    return (
        <Fragment >Alerts component</Fragment >
    )
}
    

    

export default withAlert()(Alerts)

// import React from 'react'
// import { withAlert } from 'react-alert'
 
// const App = ({ alert }) => (
//   <button
//     onClick={() => {
//       alert.show('Oh look, an alert!')
//     }}
//   >
//     Show Alert
//   </button>
// )
 
// export default withAlert()(App)