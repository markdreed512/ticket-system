import React, { Fragment, useEffect } from 'react'
import { withAlert } from 'react-alert'
const Alerts = ({ alert }) => {
    useEffect(() => {
        alert.show("it works")
      });
    return (
        <Fragment />
    )
}

    
export default withAlert()(Alerts)
