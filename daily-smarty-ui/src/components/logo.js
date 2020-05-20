import React, { Component } from "react";
import logo from "../../static/assets/ds_circle_logo.png";

export default class Logo extends Component {
    render(){
        return(
            <div className="logo-main">
                <img src='../static/assets/ds_circle_logo.png' alt="Daily Smarty Main Logo" />
            </div>
        )
    }
}