import React from 'react';
import classes from "./BuildControl.css"
import Button from '@material-ui/core/Button';


const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.temp}><label>{props.name}</label></div>
        <div className={classes.temp}><Button variant="contained" color="primary" onClick={props.remove}>Less</Button></div>
        <div className={classes.temp}><Button variant="contained" color="primary" onClick={props.add}>More</Button></div>
    </div>
)

export default BuildControl;